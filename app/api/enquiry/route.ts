import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const enquirySchema = z.object({
  service: z.string().trim().min(1).max(100),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  budget: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(5_000),
});

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && serviceRoleKey ? createClient(url, serviceRoleKey) : null;
}

export async function POST(request: NextRequest) {
  try {
    const result = enquirySchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Please check the form fields and try again." }, { status: 400 });
    }

    const supabase = getSupabase();
    if (!supabase) {
      console.error("Enquiry service is not configured.");
      return NextResponse.json({ success: false, message: "The enquiry service is temporarily unavailable." }, { status: 503 });
    }

    const { error } = await supabase.from("enquiries").insert({ ...result.data, status: "new" });
    if (error) throw error;

    return NextResponse.json({ success: true, message: "Enquiry received successfully" });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    return NextResponse.json({ success: false, message: "Error saving enquiry" }, { status: 500 });
  }
}
