import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

const QR_EXPIRY_SECONDS = 5 * 60;

function createSignature(payload: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured.");
  }

  return createHmac("sha256", secret)
    .update(payload)
    .digest("hex");
}

function safeCompare(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return timingSafeEqual(aBuffer, bBuffer);
}

function verifyQrToken(token: string) {
  try {
    const parts = token.split(".");

    if (parts.length !== 3) {
      return false;
    }

    const randomId = parts[0];
    const expiresAt = Number(parts[1]);
    const signature = parts[2];

    if (!randomId || !expiresAt || !signature) {
      return false;
    }

    const currentTime = Math.floor(Date.now() / 1000);

    if (expiresAt < currentTime) {
      return false;
    }

    if (expiresAt > currentTime + QR_EXPIRY_SECONDS + 10) {
      return false;
    }

    const payload = `${randomId}.${expiresAt}`;
    const expectedSignature = createSignature(payload);

    return safeCompare(signature, expectedSignature);
  } catch {
    return false;
  }
}

function createAdminSession() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured.");
  }

  const sessionPayload = `admin-session.${Date.now()}`;

  const signature = createHmac("sha256", secret)
    .update(sessionPayload)
    .digest("hex");

  return `${sessionPayload}.${signature}`;
}

export async function POST(request: NextRequest) {
  try {
    const adminPin = process.env.ADMIN_PIN;

    if (!adminPin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin PIN is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const token =
      typeof body.token === "string" ? body.token.trim() : "";

    const pin =
      typeof body.pin === "string" ? body.pin.trim() : "";

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Please scan the admin QR code first.",
        },
        { status: 400 }
      );
    }

    if (!verifyQrToken(token)) {
      return NextResponse.json(
        {
          success: false,
          message: "This QR code has expired. Please generate a new one.",
        },
        { status: 401 }
      );
    }

    if (!/^\d{8}$/.test(pin)) {
      return NextResponse.json(
        {
          success: false,
          message: "PIN must contain exactly 8 digits.",
        },
        { status: 400 }
      );
    }

    if (!safeCompare(pin, adminPin)) {
      return NextResponse.json(
        {
          success: false,
          message: "Incorrect 8-digit PIN.",
        },
        { status: 401 }
      );
    }

    const sessionToken = createAdminSession();

    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
    });

    response.cookies.set("team_sheriya_admin", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to login.",
      },
      { status: 500 }
    );
  }
}