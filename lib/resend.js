'use server'

import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async () => {
    await resend.emails.send({
        to : "mahjoubi.bilel@gmail.com",
        from : "OrcDev <ps3online85@gmail.com>",
        subject:"salut",
        html:"<strong>you are the best</strong>"
    })
}