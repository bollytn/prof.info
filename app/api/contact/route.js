import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtpserver.com',
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
        subject: 'Portfolio',
        html: `
      <h3>New Client</h3>
      <p>FirstName: ${data.firstName}</p>
      <p>LastName: ${data.lastName}</p>
      <p>Email: ${data.email}</p>
      <p>Télephone: ${data.phone}</p>
      <p>Subject: ${data.subject}</p>
      <p>Message: ${data.message}</p>
    `
    };

    try {
        // Verify connection configuration
        await transporter.verify();

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
