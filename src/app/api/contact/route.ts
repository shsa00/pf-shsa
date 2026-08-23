import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: 'shaneabutan@gmail.com', // Your hidden email address
    subject: `[Portfolio Contact] ${subject || 'New Message'}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  return NextResponse.json({ success: true });
}