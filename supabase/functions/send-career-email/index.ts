import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const loadTemplate = async () => {
  const res = await fetch(
    new URL("./email-template.html", import.meta.url)
  );
  return await res.text();
};

const template = await loadTemplate();

const loadConfirmationTemplate = async () => {
  const res = await fetch(
    new URL("./confirmation-template.html", import.meta.url)
  );

  return await res.text();
};


const confirmationTemplate = await loadConfirmationTemplate();

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = "";

  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000; // 32KB

  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  return btoa(binary);
}


async function fileToBase64(file: File) {
  const buffer = await file.arrayBuffer();

  return arrayBufferToBase64(buffer);
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const formData = await req.formData();

    const full_name = formData.get("full_name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const specialization = formData.get("specialization");
    const experience = formData.get("experience");

    const cv = formData.get("cv") as File;
    const certificates = formData.get("certificates") as File | null;

    const attachments: any[] = [];

    if (cv) {
      attachments.push({
        filename: cv.name,
        content: await fileToBase64(cv),
      });
    }

    if (certificates) {
      attachments.push({
        filename: certificates.name,
        content: await fileToBase64(certificates),
      });
    }

    const html = template
      .replace("{{full_name}}", full_name || "")
      .replace("{{email}}", email || "")
      .replace("{{phone}}", phone || "")
      .replace("{{position}}", position || "")
      .replace("{{specialization}}", specialization || "")
      .replace("{{experience}}", experience || "")
      .replace("{{year}}", new Date().getFullYear().toString());

    const result = await resend.emails.send({
      from: "TWINKL Careers <careers@twinkleducation.org>",
      to: ["contact@twinkleducation.org"],
      subject: `New Career Application - ${position}`,
      html,
      attachments,
    });

    const confirmationHtml = confirmationTemplate
      .replace("{{full_name}}", full_name || "")
      .replace("{{position}}", position || "")
      .replace("{{specialization}}", specialization || "")
      .replace("{{experience}}", experience || "")
      .replace(
        "{{year}}",
        new Date().getFullYear().toString()
      );


    await resend.emails.send({

      from: "TWINKL Careers <careers@twinkleducation.org>",

      to: [email],

      subject: "TWINKL Career Application",

      html: confirmationHtml,

    });

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
});