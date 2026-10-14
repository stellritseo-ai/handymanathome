import { sendFormNotificationEmail, FormSubmissionPayload } from "./mailer.server";

function jsonResponse(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
    },
  });
}

export async function handleApiRequest(request: Request): Promise<Response | null> {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Only handle /api/* endpoints
  if (!pathname.startsWith("/api/")) return null;

  // Preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Accept",
      },
    });
  }

  // ── /api/contact or /api/submit-form or /api/estimate ──
  if (
    pathname === "/api/contact" ||
    pathname === "/api/submit-form" ||
    pathname === "/api/estimate"
  ) {
    if (request.method === "POST") {
      try {
        const body = await request.json();
        const payload: FormSubmissionPayload = {
          ...body,
          createdAt: body.createdAt || new Date().toISOString(),
          source: body.source || (pathname === "/api/estimate" ? "Free Estimate Page" : "Website Contact Form"),
        };

        const result = await sendFormNotificationEmail(payload);

        if (result.success) {
          return jsonResponse({
            success: true,
            message: "Inquiry successfully delivered to Handyman At Home team via Zoho Mail.",
            messageId: result.messageId,
          });
        } else {
          return jsonResponse(
            {
              success: false,
              message: "Failed to dispatch email via Zoho Mail.",
              error: result.error,
            },
            500
          );
        }
      } catch (err: any) {
        console.error("[API Handler Error]:", err);
        return jsonResponse(
          {
            success: false,
            message: "Invalid request payload or server processing error.",
            error: err?.message || String(err),
          },
          400
        );
      }
    }

    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  return null;
}
