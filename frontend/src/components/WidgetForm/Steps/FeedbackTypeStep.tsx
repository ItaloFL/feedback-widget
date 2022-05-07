import { FeedbackKeyType, FeedbackType } from '..'
import { CloseButton } from '../../CloseButton'

type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: ((type: FeedbackKeyType) => void)
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(FeedbackType).map(([key, { image, title }]) => {
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackKeyType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
            >
              <img src={image.source} alt={image.alt} />
              <span>{title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
