import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const fieldsList = Object.entries(body)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Vaultmont Enrolments <onboarding@resend.dev>",
      to: process.env.MAIL_TO || "info@tomvault.com",
      subject: "New Masterclass Enrolment",
      text: `New enrolment submission:\n\n${fieldsList}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
