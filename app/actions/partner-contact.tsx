"use server";

import { Resend } from "resend";
import { env } from "@/env";
import { siteConfig } from "@/lib/config";

const resend = new Resend(env.RESEND_API_KEY);

export async function submitPartnerContact(data: {
  name: string;
  email: string;
  phone: string;
}) {
  try {
    const { name, email, phone } = data;

    await resend.emails.send({
      from: siteConfig.email.from,
      to: siteConfig.email.partnerRecipient,
      replyTo: email,
      subject: `Partner Inquiry from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5; padding: 40px 20px;">
          <div style="max-width: 500px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 32px;">
            <h2 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600; color: #1a1a1a;">New Partner Inquiry</h2>

            <div style="margin-bottom: 16px;">
              <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #666; margin-bottom: 4px;">Name</div>
              <div style="font-size: 16px; color: #1a1a1a;">${name}</div>
            </div>

            <div style="margin-bottom: 16px;">
              <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #666; margin-bottom: 4px;">Email</div>
              <div style="font-size: 16px;"><a href="mailto:${email}" style="color: #1a1a1a;">${email}</a></div>
            </div>

            <div style="margin-bottom: 0;">
              <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #666; margin-bottom: 4px;">Phone</div>
              <div style="font-size: 16px;"><a href="tel:${phone}" style="color: #1a1a1a;">${phone}</a></div>
            </div>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("[v0] Partner contact error:", error);
    return { success: false };
  }
}
