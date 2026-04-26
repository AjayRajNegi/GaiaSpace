import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ParsedForm = {
  applicant: {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    designation: string;
    position: string;
  };
  hasReference: boolean;
  reference: {
    firstName: string;
    middleName: string;
    lastName: string;
    institutionalEmail: string;
    designation: string;
    position: string;
  };
  message: string;
  allowProcessing: boolean;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function missing(value: unknown) {
  return !value || !String(value).trim();
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!to || !from || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const applicantRaw = formData.get("applicant");
    const referenceRaw = formData.get("reference");
    const hasReferenceRaw = formData.get("hasReference");
    const message = String(formData.get("message") ?? "");
    const allowProcessingRaw = formData.get("allowProcessing");
    const resume = formData.get("resume");

    if (typeof applicantRaw !== "string" || typeof referenceRaw !== "string") {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 },
      );
    }

    const applicant = JSON.parse(applicantRaw) as ParsedForm["applicant"];
    const reference = JSON.parse(referenceRaw) as ParsedForm["reference"];
    const hasReference = String(hasReferenceRaw) === "true";
    const allowProcessing = String(allowProcessingRaw) === "true";

    const requiredApplicant = [
      applicant.firstName,
      applicant.lastName,
      applicant.email,
      applicant.phone,
      applicant.company,
      applicant.designation,
      applicant.position,
    ];
    if (requiredApplicant.some(missing)) {
      return NextResponse.json(
        { error: "Missing applicant fields" },
        { status: 400 },
      );
    }

    if (!allowProcessing) {
      return NextResponse.json({ error: "Consent required" }, { status: 400 });
    }

    if (!(resume instanceof File)) {
      return NextResponse.json(
        { error: "Resume is required" },
        { status: 400 },
      );
    }

    if (hasReference) {
      const requiredReference = [
        reference.firstName,
        reference.lastName,
        reference.institutionalEmail,
        reference.designation,
        reference.position,
      ];
      if (requiredReference.some(missing)) {
        return NextResponse.json(
          { error: "Missing reference fields" },
          { status: 400 },
        );
      }
    }

    const applicantName = [
      applicant.firstName,
      applicant.middleName,
      applicant.lastName,
    ]
      .filter(Boolean)
      .join(" ");
    const referenceName = [
      reference.firstName,
      reference.middleName,
      reference.lastName,
    ]
      .filter(Boolean)
      .join(" ");

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const result = await resend.emails.send({
      from,
      to,
      subject: `New Job Application - ${applicant.position}`,
      replyTo: applicant.email,
      html: `
        <h2>New Job Application</h2>
        <h3>Applicant</h3>
        <p><strong>Name:</strong> ${escapeHtml(applicantName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(applicant.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(applicant.phone)}</p>
        <p><strong>Company:</strong> ${escapeHtml(applicant.company)}</p>
        <p><strong>Designation:</strong> ${escapeHtml(applicant.designation)}</p>
        <p><strong>Position Applied:</strong> ${escapeHtml(applicant.position)}</p>

        <h3>Reference Included:</h3>
        <p>${hasReference ? "Yes" : "No"}</p>

        ${
          hasReference
            ? `
          <h3>Reference</h3>
          <p><strong>Name:</strong> ${escapeHtml(referenceName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(reference.institutionalEmail)}</p>
          <p><strong>Designation:</strong> ${escapeHtml(reference.designation)}</p>
          <p><strong>Position:</strong> ${escapeHtml(reference.position)}</p>
        `
            : ""
        }

        <h3>Message</h3>
        <p>${escapeHtml(message || "N/A").replaceAll("\n", "<br/>")}</p>

        <h3>Consent</h3>
        <p>Allow processing: ${allowProcessing ? "Yes" : "No"}</p>
      `,
      attachments: [
        {
          filename: resume.name || "resume",
          content: resumeBuffer,
        },
      ],
    });

    if ("error" in result && result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Application email failed:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

// type ParsedForm = {
//   applicant: {
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     email: string;
//     phone: string;
//     company: string;
//     designation: string;
//     position: string;
//   };
//   hasReference: boolean;
//   reference: {
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     institutionalEmail: string;
//     designation: string;
//     position: string;
//   };
//   message: string;
//   allowProcessing: boolean;
// };

// function escapeHtml(value: string) {
//   return value
//     .replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&gt;")
//     .replaceAll('"', "&quot;")
//     .replaceAll("'", "&#039;");
// }

// function missing(value: unknown) {
//   return !value || !String(value).trim();
// }

// export async function POST(req: Request) {
//   try {
//     const formData = await req.formData();

//     const to = process.env.CONTACT_TO_EMAIL;
//     const from = process.env.ZOHO_FROM_EMAIL;
//     const zohoUser = process.env.ZOHO_USER;
//     const zohoPass = process.env.ZOHO_APP_PASSWORD;
//     const zohoHost = process.env.ZOHO_SMTP_HOST || "smtp.zoho.com";
//     const zohoPort = Number(process.env.ZOHO_SMTP_PORT || "587");

//     if (!to || !from || !zohoUser || !zohoPass) {
//       return NextResponse.json(
//         { error: "Email service not configured" },
//         { status: 500 },
//       );
//     }

//     const applicantRaw = formData.get("applicant");
//     const referenceRaw = formData.get("reference");
//     const hasReferenceRaw = formData.get("hasReference");
//     const message = String(formData.get("message") ?? "");
//     const allowProcessingRaw = formData.get("allowProcessing");
//     const resume = formData.get("resume");

//     if (typeof applicantRaw !== "string" || typeof referenceRaw !== "string") {
//       return NextResponse.json(
//         { error: "Invalid request payload" },
//         { status: 400 },
//       );
//     }

//     const applicant = JSON.parse(applicantRaw) as ParsedForm["applicant"];
//     const reference = JSON.parse(referenceRaw) as ParsedForm["reference"];
//     const hasReference = String(hasReferenceRaw) === "true";
//     const allowProcessing = String(allowProcessingRaw) === "true";

//     const requiredApplicant = [
//       applicant.firstName,
//       applicant.lastName,
//       applicant.email,
//       applicant.phone,
//       applicant.company,
//       applicant.designation,
//       applicant.position,
//     ];

//     if (requiredApplicant.some(missing)) {
//       return NextResponse.json(
//         { error: "Missing applicant fields" },
//         { status: 400 },
//       );
//     }

//     if (!allowProcessing) {
//       return NextResponse.json({ error: "Consent required" }, { status: 400 });
//     }

//     if (!(resume instanceof File)) {
//       return NextResponse.json(
//         { error: "Resume is required" },
//         { status: 400 },
//       );
//     }

//     if (hasReference) {
//       const requiredReference = [
//         reference.firstName,
//         reference.lastName,
//         reference.institutionalEmail,
//         reference.designation,
//         reference.position,
//       ];

//       if (requiredReference.some(missing)) {
//         return NextResponse.json(
//           { error: "Missing reference fields" },
//           { status: 400 },
//         );
//       }
//     }

//     const applicantName = [
//       applicant.firstName,
//       applicant.middleName,
//       applicant.lastName,
//     ]
//       .filter(Boolean)
//       .join(" ");

//     const referenceName = [
//       reference.firstName,
//       reference.middleName,
//       reference.lastName,
//     ]
//       .filter(Boolean)
//       .join(" ");

//     const resumeBuffer = Buffer.from(await resume.arrayBuffer());

//     const transporter = nodemailer.createTransport({
//       host: zohoHost,
//       port: zohoPort,
//       secure: zohoPort === 465, // true for 465, false for 587
//       auth: {
//         user: zohoUser,
//         pass: zohoPass,
//       },
//     });

//     const info = await transporter.sendMail({
//       from: `Gaia Space <${from}>`,
//       to,
//       replyTo: applicant.email,
//       subject: `New Job Application - ${applicant.position}`,
//       html: `
//         <h2>New Job Application</h2>
//         <h3>Applicant</h3>
//         <p><strong>Name:</strong> ${escapeHtml(applicantName)}</p>
//         <p><strong>Email:</strong> ${escapeHtml(applicant.email)}</p>
//         <p><strong>Phone:</strong> ${escapeHtml(applicant.phone)}</p>
//         <p><strong>Company:</strong> ${escapeHtml(applicant.company)}</p>
//         <p><strong>Designation:</strong> ${escapeHtml(applicant.designation)}</p>
//         <p><strong>Position Applied:</strong> ${escapeHtml(applicant.position)}</p>

//         <h3>Reference Included:</h3>
//         <p>${hasReference ? "Yes" : "No"}</p>

//         ${
//           hasReference
//             ? `
//           <h3>Reference</h3>
//           <p><strong>Name:</strong> ${escapeHtml(referenceName)}</p>
//           <p><strong>Email:</strong> ${escapeHtml(reference.institutionalEmail)}</p>
//           <p><strong>Designation:</strong> ${escapeHtml(reference.designation)}</p>
//           <p><strong>Position:</strong> ${escapeHtml(reference.position)}</p>
//         `
//             : ""
//         }

//         <h3>Message</h3>
//         <p>${escapeHtml(message || "N/A").replaceAll("\n", "<br/>")}</p>

//         <h3>Consent</h3>
//         <p>Allow processing: ${allowProcessing ? "Yes" : "No"}</p>
//       `,
//       attachments: [
//         {
//           filename: resume.name || "resume",
//           content: resumeBuffer,
//         },
//       ],
//     });

//     return NextResponse.json({ ok: true, messageId: info.messageId });
//   } catch (err) {
//     console.error("Application email failed:", err);
//     return NextResponse.json({ error: "Invalid request" }, { status: 400 });
//   }
// }
