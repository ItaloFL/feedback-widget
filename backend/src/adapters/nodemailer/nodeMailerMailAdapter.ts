import { MailAdapter, SendMailData } from '../mailAdapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'be9c776762a9fc',
    pass: 'b58167125dc902'
  }
})

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe FeedGet <oi@feedget.com>',
      to: 'Italo Ferreira <grd788@gmail.com>',
      subject,
      html: body
    })
  }
}
