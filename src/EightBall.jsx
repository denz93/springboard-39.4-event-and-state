import React from 'react';
import { useEffect } from 'react';

/**
 * @typedef {Object} Answer 
 * @property {string} msg
 * @property {string} color
 * 
 * @typedef {Object} EightBallProps
 * @property {Answer[]} answers
 * @property {Answer} initialAnswer
 * @property {(answer: Answer) => void} onAnswerChanged
 * 
 * @param {EightBallProps} props
 * @returns 
 */
export default function EightBall ({
  // eslint-disable-next-line react/prop-types
  answers = [], 
  // eslint-disable-next-line react/prop-types
  initialAnswer ,
  // eslint-disable-next-line react/prop-types
  onAnswerChanged
}) {
  const [answer, setAnswer] = React.useState(initialAnswer)
  const randomIndex = () => Math.floor(Math.random() * (answers.length-1))
  useEffect(() => setAnswer(initialAnswer), [initialAnswer])
  return <div 
    className={`flex justify-center items-center w-[300px] h-[300px] rounded-full text-slate-200 cursor-pointer`}
    style={{backgroundColor: answer.color}}
    onClick={() => {
      const pickedAnswer = answers[randomIndex()]
      setAnswer(pickedAnswer)
      onAnswerChanged?.(pickedAnswer)
    }}
    >
    {answer.msg}
  </div>
}