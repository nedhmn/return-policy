"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitPartnerContact(data: {
  name: string
  email: string
  phone: string
}) {
  try {
    const { name, email, phone } = data

    await resend.emails.send({
      from: "Return Policy <onboarding@resend.dev>",
      to: "hermannned@gmail.com",
      subject: "New Partner Contact Form Submission",
      html: `
        <h2>New Partner Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("[v0] Partner contact error:", error)
    return { success: false }
  }
}
