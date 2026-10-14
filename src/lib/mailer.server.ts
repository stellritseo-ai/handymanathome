import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "smtppro.zoho.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465", 10);
const SMTP_SECURE = process.env.SMTP_SECURE !== "false";
const SMTP_USER = process.env.SMTP_USER || "eva@stellrit.com";
const SMTP_PASS = process.env.SMTP_PASS || "495gWTEyhg6Z";
const DEFAULT_NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "eva@stellrit.com";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      connectionTimeout: 15000,
      socketTimeout: 20000,
    });
  }
  return transporter;
}

export interface FormSubmissionPayload {
  fullName?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  service?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  details?: string;
  message?: string;
  preferredContact?: string;
  source?: string;
  createdAt?: string;
  [key: string]: any;
}

export async function sendFormNotificationEmail(
  payload: FormSubmissionPayload,
  recipientEmail: string = DEFAULT_NOTIFICATION_EMAIL
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transport = getTransporter();

    const clientName = payload.fullName || payload.name || "Website Visitor";
    const serviceName = payload.service || payload.projectType || payload["Service Requested"] || "General Inquiry";
    const source = payload.source || "Website Form";
    const subject = `🔨 New Handyman At Home Inquiry: ${clientName} (${serviceName})`;

    const formattedDate = payload.createdAt
      ? new Date(payload.createdAt).toLocaleString("en-US", { timeZone: "America/Chicago" })
      : new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

    const phone = payload.phone || payload["Phone Number"] || "";
    const email = payload.email || payload["Email Address"] || "";
    const address = payload.address || payload["Project Address / City"] || "";
    const budget = payload.budget || payload["Estimated Budget"] || "";
    const timeline = payload.timeline || payload["Ideal Timeline"] || "";
    const preferredContact = payload.preferredContact || payload["Preferred Contact Method"] || "";
    const details = payload.details || payload.message || payload["Project Details"] || "No additional project notes provided.";

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px -2px rgba(0,0,0,0.06); }
          .header { background: linear-gradient(135deg, #0000b9 0%, #000066 100%); padding: 30px 24px; color: #ffffff; text-align: left; }
          .header h1 { margin: 6px 0 4px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
          .header p { margin: 0; font-size: 13px; opacity: 0.9; }
          .content { padding: 28px 24px; }
          .field-row { margin-bottom: 16px; }
          .field-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
          .field-value { font-size: 15px; font-weight: 600; color: #0f172a; word-break: break-word; }
          .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; word-break: break-word; }
          .btn-group { margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap; }
          .btn-primary { background: #0000b9; color: #ffffff !important; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 13px; display: inline-block; }
          .btn-secondary { background: #f1f5f9; color: #0000b9 !important; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 13px; border: 1px solid #cbd5e1; display: inline-block; }
          .footer { background: #f8fafc; padding: 18px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
          .badge { display: inline-block; background: #eff6ff; color: #1d4ed8; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; margin-bottom: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span style="background: rgba(255,255,255,0.2); padding: 3px 8px; border-radius: 12px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block;">
              Handyman At Home · New Website Lead
            </span>
            <h1>New Customer Inquiry</h1>
            <p>Dispatched instantly from your DFW website.</p>
          </div>
          <div class="content">
            <div class="field-row">
              <span class="badge">📍 Source: ${source}</span>
            </div>

            <div class="field-row">
              <div class="field-label">Customer Name</div>
              <div class="field-value">${clientName}</div>
            </div>

            <div class="field-row">
              <div class="field-label">Phone Number</div>
              <div class="field-value">
                ${phone ? `<a href="tel:${phone}" style="color: #0000b9; text-decoration: none; font-weight: 700;">${phone}</a>` : "Not provided"}
              </div>
            </div>

            <div class="field-row">
              <div class="field-label">Email Address</div>
              <div class="field-value">
                ${email ? `<a href="mailto:${email}" style="color: #0000b9; text-decoration: none;">${email}</a>` : "Not provided"}
              </div>
            </div>

            ${address ? `
            <div class="field-row">
              <div class="field-label">Project Address / Location</div>
              <div class="field-value">${address}</div>
            </div>
            ` : ""}

            <div class="field-row">
              <div class="field-label">Service Requested</div>
              <div class="field-value">${serviceName}</div>
            </div>

            ${budget ? `
            <div class="field-row">
              <div class="field-label">Estimated Budget</div>
              <div class="field-value">${budget}</div>
            </div>
            ` : ""}

            ${timeline ? `
            <div class="field-row">
              <div class="field-label">Target Timeline</div>
              <div class="field-value">${timeline}</div>
            </div>
            ` : ""}

            ${preferredContact ? `
            <div class="field-row">
              <div class="field-label">Preferred Contact Method</div>
              <div class="field-value">${preferredContact}</div>
            </div>
            ` : ""}

            <div class="field-row">
              <div class="field-label">Project Details & Notes</div>
              <div class="message-box">${details}</div>
            </div>

            <div class="btn-group">
              ${phone ? `<a href="tel:${phone}" class="btn-primary">📞 Call Customer Now</a>` : ""}
              ${email ? `<a href="mailto:${email}?subject=Re: Your Handyman At Home Request" class="btn-secondary">✉️ Reply via Email</a>` : ""}
            </div>
          </div>
          <div class="footer">
            Submitted on ${formattedDate} CT<br/>
            Handyman At Home · Dallas–Fort Worth, TX · Dispatched to <strong>${recipientEmail}</strong>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
New Handyman At Home Inquiry from ${source}
Date: ${formattedDate} CT

Name: ${clientName}
Phone: ${phone || "Not provided"}
Email: ${email || "Not provided"}
Address: ${address || "Not provided"}
Service: ${serviceName}
Budget: ${budget || "Not specified"}
Timeline: ${timeline || "Not specified"}
Preferred Contact: ${preferredContact || "Not specified"}

Project Details:
${details}
    `.trim();

    const info = await transport.sendMail({
      from: `"Handyman At Home Inquiries" <${SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email && email.includes("@") ? email : SMTP_USER,
      subject,
      text: textContent,
      html,
    });

    console.log(`[Zoho SMTP] Successfully dispatched form inquiry to ${recipientEmail}. Message ID:`, info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err: any) {
    console.error("[Zoho SMTP Error] Failed to send form notification email:", err);
    return { success: false, error: err?.message || String(err) };
  }
}
