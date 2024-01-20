
import { useState } from 'react';
import './App.css'
import EightBall from './EightBall'
import ColorBoxSeries from './ColorBoxSeries';

const sampleBalls = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];


/**
 * 
 * @param {any[]} array 
 */


function App() {
  const [initialAnswer, setInitialAnswer] = useState({msg: 'Think of a Question', color: 'black'})
  const [record, setRecord] = useState([])

  
  return (<div>
    <h1 className='text-3xl mb-10'>Eight Ball game</h1>
    <button className='rounded-md bg-slate-500 px-4 py-2 mb-2' onClick={() => setInitialAnswer(pre => ({...pre}))}>Reset</button>
    <div>Record: {Math.floor(record.length / 3)}</div>
    <div className='flex justify-center mt-5'>

      <EightBall answers={sampleBalls} initialAnswer={initialAnswer} onAnswerChanged={(answer) => {
        if (record.length > 0 && record[record.length - 1].color === answer.color) {
          return;
        } 
        setRecord([...record, answer])
      }}/>
    </div>

    <h1 className='text-3xl mt-20'>Color Boxes</h1>
    <ColorBoxSeries />
  </div>)
}

export default App
