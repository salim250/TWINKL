import { Resend } from "npm:resend";


const resend = new Resend(
  Deno.env.get("RESEND_API_KEY")
);

const loadTemplate = async () => {
  const res = await fetch(
    new URL("./email-template.html", import.meta.url)
  );
  return await res.text();
};

const template = await loadTemplate();

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

    const data = await req.json();

    const html = template
      .replace("{{student_name}}", data.student_name || "")
      .replace("{{date_of_birth}}", data.date_of_birth || "")
      .replace("{{gender}}", data.gender || "")
      .replace("{{nationality}}", data.nationality || "")
      .replace("{{parent_name_phone}}", data.parent_name_phone || "")
      .replace("{{parent_signature}}", data.parent_signature || "")
      .replace("{{educational_system}}", data.educational_system || "")
      .replace(
        "{{subjects}}",
        Array.isArray(data.subjects) ? data.subjects.join(", ") : ""
      )
      .replace("{{preferred_schedule}}", data.preferred_schedule || "")
      .replace("{{year}}", new Date().getFullYear().toString());

    const email = await resend.emails.send({

      from: "TWINKL Education <admissions@twinkleducation.org>",

      to: ["contact@twinkleducation.org"],

      subject: "New Enrollment Application",

      html: html
    });

    return new Response(
      JSON.stringify({ email }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200
      }
    );

  }

  catch (error) {

    console.error(error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500
      }
    );

  }

});