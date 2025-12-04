import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
  privacy: z.boolean().refine((val) => val === true),
  // Honeypot field - must be empty
  website: z.string().max(0).optional(),
});

// Simple in-memory rate limiting (for production, use Redis/Vercel KV)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    // Reset or create new limit (5 requests per hour)
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 });
    return true;
  }

  if (limit.count >= 5) {
    return false; // Rate limit exceeded
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Honeypot check - if website field is filled, it's a bot
    if (validatedData.website) {
      console.log("Honeypot triggered - potential bot submission");
      // Return success to bot, but don't send email
      return NextResponse.json(
        { message: "Nachricht erfolgreich gesendet" },
        { status: 200 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Maxflow Software Kontaktformular <noreply@maxflow-software.de>",
      to: "office@maxflow-software.de",
      subject: `Kontaktanfrage: ${validatedData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #6366f1; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #6366f1; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">Neue Kontaktanfrage</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Maxflow Software Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${validatedData.name}</div>
                </div>
                <div class="field">
                  <div class="label">E-Mail:</div>
                  <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                </div>
                ${
                  validatedData.phone
                    ? `
                <div class="field">
                  <div class="label">Telefon:</div>
                  <div class="value"><a href="tel:${validatedData.phone}">${validatedData.phone}</a></div>
                </div>
                `
                    : ""
                }
                <div class="field">
                  <div class="label">Betreff:</div>
                  <div class="value">${validatedData.subject}</div>
                </div>
                <div class="field">
                  <div class="label">Nachricht:</div>
                  <div class="value">${validatedData.message.replace(/\n/g, "<br>")}</div>
                </div>
                <div class="footer">
                  Diese E-Mail wurde über das Kontaktformular auf maxflow-software.de gesendet.
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { message: "Nachricht erfolgreich gesendet" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validierungsfehler", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
