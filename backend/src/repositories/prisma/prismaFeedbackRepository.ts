import { prisma } from '../../prisma'
import { FeedbackRepository, FeedbackRequestData } from '../feedbacksRepository'

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackRequestData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}
