'use server'

import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async () => {
    await resend.emails.send({
        to : "ps3online85@gmail.com",
        from : "OrcDev <mahjoubi.bilel@gmail.com>",
        subject:"salut",
        html:"<strong>you are the best</strong>"
    })
}