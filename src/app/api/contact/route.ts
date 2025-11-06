
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    if (!user || !pass || !recipientEmail) {
      console.error('Missing environment variables for email sending');
      return NextResponse.json({ message: 'Error en la configuración del servidor.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user,
        pass: pass,
      },
    });

    const mailOptions = {
      from: user,
      to: recipientEmail,
      subject: `Nuevo mensaje de contacto de ${name}: ${subject}`,
      html: `
        <h3>Nuevo mensaje desde el portfolio</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Mensaje enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al enviar el mensaje' }, { status: 500 });
  }
}
