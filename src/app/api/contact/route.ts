import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  reason: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// export async function POST(req: Request) {
//   try {
//     const body = (await req.json()) as ContactPayload;

//     const required = [
//       "firstName",
//       "lastName",
//       "email",
//       "phone",
//       "company",
//       "designation",
//       "reason",
//       "message",
//     ] as const;
//     for (const key of required) {
//       if (!body[key]?.toString().trim()) {
//         return NextResponse.json({ error: `Missing ${key}` }, { status: 400 });
//       }
//     }

//     const to = process.env.CONTACT_TO_EMAIL;
//     const from = process.env.CONTACT_FROM_EMAIL;

//     if (!to || !from || !process.env.RESEND_API_KEY) {
//       return NextResponse.json(
//         { error: "Email service not configured" },
//         { status: 500 },
//       );
//     }

//     const fullName = [body.firstName, body.middleName, body.lastName]
//       .filter(Boolean)
//       .join(" ");

//     const { error } = await resend.emails.send({
//       from,
//       to,
//       subject: `New Contact Form Submission - ${body.reason}`,
//       replyTo: body.email,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
//         <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
//         <p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>
//         <p><strong>Company:</strong> ${escapeHtml(body.company)}</p>
//         <p><strong>Designation:</strong> ${escapeHtml(body.designation)}</p>
//         <p><strong>Reason:</strong> ${escapeHtml(body.reason)}</p>
//         <p><strong>Message:</strong></p>
//         <p>${escapeHtml(body.message).replaceAll("\n", "<br/>")}</p>
//       `,
//     });

//     if (error) {
//       console.log(error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json({ ok: true });
//   } catch {
//     return NextResponse.json({ error: "Invalid request" }, { status: 400 });
//   }
// }

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const required = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "company",
      "designation",
      "reason",
      "message",
    ] as const;
    for (const key of required) {
      if (!body[key]?.toString().trim()) {
        return NextResponse.json({ error: `Missing ${key}` }, { status: 400 });
      }
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const fullName = [body.firstName, body.middleName, body.lastName]
      .filter(Boolean)
      .join(" ");

    const result = await resend.emails.send({
      from,
      to,
      subject: `New Contact Form Submission - ${body.reason}`,
      replyTo: body.email,
      html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>
          <p><strong>Company:</strong> ${escapeHtml(body.company)}</p>
          <p><strong>Designation:</strong> ${escapeHtml(body.designation)}</p>
          <p><strong>Reason:</strong> ${escapeHtml(body.reason)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(body.message).replaceAll("\n", "<br/>")}</p>
        `,
    });

    console.log("Resend result:", result);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email failed:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
