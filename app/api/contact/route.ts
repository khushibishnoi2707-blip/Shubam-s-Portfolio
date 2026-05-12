import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { profile } from "@/data";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(12)
});

export async function POST(request: Request): Promise<NextResponse> {
  const payload: unknown = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid contact form payload." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({
      ok: true,
      mode: "preview",
      message: "RESEND_API_KEY is not configured. Message accepted in preview mode."
    });
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = parsed.data;

  await resend.emails.send({
    from: fromEmail,
    to: profile.email,
    replyTo: email,
    subject: `Portfolio inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  });

  return NextResponse.json({ ok: true });
}
