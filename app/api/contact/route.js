import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY);
console.log('EMAIL_USER:', process.env.EMAIL_USER);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
    const data = await req.json();

    const msg = {
        to: 'mahjoubi.bilel@gmail.com', // Recipient email
        from: process.env.EMAIL_USER,  // Sender email (must be verified in SendGrid)
        subject: 'renseignement',
        html: `
            <h3>Nouveau Eléve</h3>
            <p>FirstName: ${data.firstName}</p>
            <p>LastName: ${data.lastName}</p>
            <p>Email: ${data.email}</p>
            <p>Télephone: ${data.phone}</p>
            <p>Subject: ${data.subject}</p>
            <p>Message: ${data.message}</p>
        `,
    };
    
    try {
        await sgMail.send(msg);
        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send message', details: error.message }, { status: 500 });
    }
}