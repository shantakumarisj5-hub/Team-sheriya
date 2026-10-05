import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { createClient } from "@supabase/supabase-js";

function getExpectedSessionPrefix() {
  return "admin-session.";
}

function isAuthenticated(request: NextRequest) {
  try {
    const token = request.cookies.get("team_sheriya_admin")?.value;

    if (!token) {
      return false;
    }

    const secret = process.env.ADMIN_SESSION_SECRET;

    if (!secret) {
      return false;
    }

    const parts = token.split(".");

    if (parts.length !== 3) {
      return false;
    }

    const prefix = parts[0];
    const timestamp = parts[1];
    const signature = parts[2];

    if (prefix !== "admin-session") {
      return false;
    }

    const sessionTime = Number(timestamp);

    if (!Number.isFinite(sessionTime)) {
      return false;
    }

    const sessionAge = Date.now() - sessionTime;

    if (sessionAge < 0 || sessionAge > 8 * 60 * 60 * 1000) {
      return false;
    }

    const payload = `${getExpectedSessionPrefix()}${timestamp}`;

    const expectedSignature = createHmac("sha256", secret)
      .update(payload)
      .digest("hex");

    const actualBuffer = Buffer.from(signature);
    const expectedBuffer = Buffer.from(expectedSignature);

    if (actualBuffer.length !== expectedBuffer.length) {
      return false;
    }

    return timingSafeEqual(actualBuffer, expectedBuffer);
  } catch {
    return false;
  }
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey);
}

export async function GET(request: NextRequest) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const supabase = getSupabase();

    if (!supabase) {
      return NextResponse.json(
        {
          success: false,
          message: "Supabase is not configured.",
        },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Admin enquiry fetch error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to load enquiries.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      enquiries: data ?? [],
    });
  } catch (error) {
    console.error("Admin enquiries error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load enquiries.",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const body = await request.json();

    const id = body.id;
    const status = body.status;

    const allowedStatuses = [
      "new",
      "contacted",
      "in_progress",
      "completed",
      "cancelled",
    ];

    if (!id || !allowedStatuses.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid enquiry update.",
        },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    if (!supabase) {
      return NextResponse.json(
        {
          success: false,
          message: "Supabase is not configured.",
        },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from("enquiries")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Status update error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to update enquiry.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      enquiry: data,
    });
  } catch (error) {
    console.error("Admin PATCH error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to update enquiry.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Enquiry ID is required.",
        },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    if (!supabase) {
      return NextResponse.json(
        {
          success: false,
          message: "Supabase is not configured.",
        },
        { status: 500 }
      );
    }

    const { error } = await supabase
      .from("enquiries")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Delete enquiry error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to delete enquiry.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Admin DELETE error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to delete enquiry.",
      },
      { status: 500 }
    );
  }
}