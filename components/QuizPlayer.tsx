'use client'

import { useState } from 'react'

type Props = {
  question: string
  choices: string[]
  correct_answer: string
  explanation: string
}

export function QuizPlayer({ question, choices, correct_answer, explanation }: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const isCorrect = submitted && selected === correct_answer

  return (
    <div className="space-y-6">
      <p className="text-lg font-medium leading-relaxed">{question}</p>
      <div className="space-y-2">
        {choices.map((choice) => (
          <label
            key={choice}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 ${
              selected === choice ? 'border-accent bg-accent-soft' : 'border-border'
            }`}
          >
            <input
              type="radio"
              name="choice"
              checked={selected === choice}
              onChange={() => !submitted && setSelected(choice)}
              disabled={submitted}
            />
            <span className="text-sm">{choice}</span>
          </label>
        ))}
      </div>
      {!submitted ? (
        <button
          type="button"
          className="btn-primary disabled:opacity-50"
          disabled={!selected}
          onClick={() => setSubmitted(true)}
        >
          回答する
        </button>
      ) : (
        <div
          className={`rounded-xl border p-4 ${
            isCorrect ? 'border-blue-200 bg-accent-soft' : 'border-amber-200 bg-amber-50'
          }`}
        >
          <p className="font-semibold text-sm">{isCorrect ? '✓ 正解' : '✗ 不正解'}</p>
          {!isCorrect && (
            <p className="mt-2 text-sm">
              正解: <strong>{correct_answer}</strong>
            </p>
          )}
          <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap">{explanation}</p>
        </div>
      )}
    </div>
  )
}
