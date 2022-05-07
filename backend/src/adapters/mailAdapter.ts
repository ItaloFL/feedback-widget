export type SendMailData = {
  subject: string
  body: string
}

export type MailAdapter = {
  sendMail: (data: SendMailData) => Promise<void>
}
