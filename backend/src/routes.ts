import { Router } from 'express'
import { NodeMailerMailAdapter } from './adapters/nodemailer/nodeMailerMailAdapter'
import { SubmitFeedbackUseCase } from './modules/Feedback/useCases/SubmitFeedbackUseCase'
import { PrismaFeedbackRepository } from './repositories/prisma/prismaFeedbackRepository'

export const routes = Router()

routes.post('/feedback', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const prismaFeedbackRepository = new PrismaFeedbackRepository()
  const nodemailerMailAdapter = new NodeMailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})
