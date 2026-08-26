import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log("📩 Received enquiry:", body);
    
    // Save to Supabase
    const { data, error } = await supabase
      .from('enquiries')
      .insert({
        service: body.service,
        name: body.name,
        email: body.email,
        budget: body.budget,
        message: body.message,
        status: 'new',
      })
      .select()
      .single();
    
    if (error) {
      console.error("❌ Supabase error:", error);
      throw error;
    }
    
    console.log("✅ Saved to Supabase:", data.id);
    
    return NextResponse.json({ 
      success: true, 
      message: "Enquiry received successfully",
      data: data
    });
  } catch (error) {
    console.error("❌ Error saving enquiry:", error);
    return NextResponse.json(
      { success: false, message: "Error saving enquiry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log("📊 Fetching all enquiries from Supabase...");
    
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("❌ Supabase error:", error);
      throw error;
    }
    
    console.log("✅ Found", data?.length || 0, "enquiries");
    
    return NextResponse.json({ enquiries: data || [] });
  } catch (error) {
    console.error("❌ Error fetching enquiries:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching enquiries" },
      { status: 500 }
    );
  }
}