import { SubmitFeedbackUseCase } from './SubmitFeedbackUseCase'

const createSubmitSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createSubmitSpy },
  { sendMail: sendMailSpy }
)

describe('Submit Feedback', () => {
  it('Should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Test Coment',
        screenshot: 'data:image/png:base64Test Screenshot'
      })
    ).resolves.not.toThrow()

    expect(createSubmitSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('Should not be able to submit a feedback without type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'Test Coment',
        screenshot: 'data:image/png:base64Test Screenshot'
      })
    ).rejects.toThrow()
  })

  it('Should not be able to submit a feedback without comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png:base64Test Screenshot'
      })
    ).rejects.toThrow()
  })

  it('Should not be able to submit a feedback with screenshot invalid type', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Test Coment',
        screenshot: 'Test Screenshot'
      })
    ).rejects.toThrow()
  })
})
