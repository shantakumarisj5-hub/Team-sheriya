import { NextResponse } from "next/server";
import { createHmac, randomBytes } from "crypto";

const QR_EXPIRY_SECONDS = 5 * 60;

function signToken(payload: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured.");
  }

  return createHmac("sha256", secret)
    .update(payload)
    .digest("hex");
}

export async function GET() {
  try {
    const secret = process.env.ADMIN_SESSION_SECRET;

    if (!secret) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin authentication is not configured.",
        },
        { status: 500 }
      );
    }

    const randomId = randomBytes(16).toString("hex");
    const expiresAt = Math.floor(Date.now() / 1000) + QR_EXPIRY_SECONDS;

    const payload = `${randomId}.${expiresAt}`;
    const signature = signToken(payload);

    const token = `${payload}.${signature}`;

    return NextResponse.json({
      success: true,
      token,
      expiresAt,
    });
  } catch (error) {
    console.error("QR generation error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to generate QR code.",
      },
      { status: 500 }
    );
  }
}