import EmailTemplate from "@/app/emails/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  // body of our request - to be sent from the Client-side in our form above
  const { message, email } = body;

  // Check if the required fields are present
  if (!message || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: `hello@higherfeatsafrica.com`,
      to: "peace.ezecc@gmail.com",
      subject: "Message from Higher Feats Africa",
      react: EmailTemplate({ email, message }),
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 },
    );
  }
}
