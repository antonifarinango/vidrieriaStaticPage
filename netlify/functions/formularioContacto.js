import { Resend } from "resend";

const resend = new Resend(process.env.VITE_EMAIL_KEY);

export async function handler(e, context){
  if (e.httpMethod === "POST") {
    try {
      const { to, subject, body } = JSON.parse(e.body);

      //ENVIAR CORREO CON RESEND
      const response = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: to,
        subject: subject,
        html: body,
      });

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Correo enviado exitosamente",
          data: response,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Error al enviar el correo",
          details: error.message,
        }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Not function" }),
  };
};
