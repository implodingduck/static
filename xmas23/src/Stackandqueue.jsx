import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Stackandqueue() {
  const [stack, setStack] = useState([])
  const [queue, setQueue] = useState([
    "n","h","r","c","g","i"
  ])

  const handleSubmit = (e) => {
    alert(queue.join() == "g,r,i,n,c,h")
  }
  const handleReset = (e) => {
    setStack([])
    setQueue(["n","h","r","c","g","i"])
  }

  const handleStackButton = (e) => {
    setQueue([...queue, stack[0]])
    setStack(stack.slice(1))
  }

  const handleQueueButton = (e) => {
    setStack([queue[0], ...stack ])
    setQueue(queue.slice(1))
  }

  return (
    <>
      <div>
        <h2>Stack and Queue</h2>
        {
          // ["t","h","e","g","r","i","n","c","h"] .map(value => ({ value, sort: Math.random() }))
          // .sort((a, b) => a.sort - b.sort)
          // .map(({ value }) => value).map((s, i) => {
          // return s;
          // })
        }
      </div>
      <div className="sqleft">
      <div className="word">
      {
        stack.map( (v, i) => {
          return (<div className="letter" key={i}>{v}</div>);
        })
      }
      </div>
        <button onClick={handleStackButton}>^</button>
      </div>
      <div className="sqright">
        <div className="word">
        {
          queue.map( (v, i) => {
            return (<div className="letter" key={i}>{v}</div>);
          })
        }
        </div>
        <button onClick={handleQueueButton}>&lt;&mdash;</button>
      </div>
      <div>
        <button className="submit" onClick={handleSubmit}>Submit</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default Stackandqueue
