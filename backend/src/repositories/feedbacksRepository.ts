export type FeedbackRequestData = {
  type: string
  comment: string
  screenshot?: string
}

export type FeedbackRepository = {
  create: (data: FeedbackRequestData) => Promise<void>
}
