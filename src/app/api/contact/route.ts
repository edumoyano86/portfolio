
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validar que los datos necesarios están presentes
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Faltan datos en el formulario.' }, { status: 400 });
    }
    
    // IMPORTANT: Use an App Password for Gmail, not your regular password.
    // Set these environment variables in your hosting provider.
    const user = process.env.EMAIL_USER || 'cba2486@gmail.com';
    const pass = process.env.EMAIL_PASS || 'dxgz aosz ikzq onlg';
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'cba2486@gmail.com';

    if (!user || !pass) {
        console.error('Missing environment variables for email');
        return NextResponse.json({ error: 'Configuración del servidor incompleta.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: user,
        pass: pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`, // Sender address (shows your name and verified email)
      replyTo: email, // Set the 'reply-to' field to the sender's email
      to: recipientEmail, // List of receivers (your email)
      subject: `Nuevo mensaje de ${name}: ${subject}`, // Subject line
      html: `
        <h1>Nuevo mensaje desde el Portfolio</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <hr />
        <h2>Mensaje:</h2>
        <p>${message}</p>
        <hr />
        <p><em>Este correo fue enviado desde el formulario de contacto de tu portfolio.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: '¡Mensaje enviado con éxito!' }, { status: 200 });

  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ error: 'Hubo un error al enviar el mensaje.' }, { status: 500 });
  }
}
