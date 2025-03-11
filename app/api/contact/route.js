import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'mahjoubi.bilel@gmail.com',
        from: process.env.EMAIL_USER, // Use the email address or domain you verified with SendGrid
        subject: 'Portfolio',
        html: `
      <h3>New Client</h3>
      <p>FirstName: ${data.firstName}</p>
      <p>LasttName: ${data.lastName}</p>
      <p>Email: ${data.email}</p>
      <p>Télephone: ${data.phone}</p>
       <p>Subject: ${data.subject}</p>
      <p>Message: ${data.message}</p>
    `
    };

    try {
        await sgMail.send(msg);
        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send message', details: error.message }, { status: 500 });
    }
}