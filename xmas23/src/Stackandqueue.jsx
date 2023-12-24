import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from "react-router-dom";

function Stackandqueue() {
  const [stack, setStack] = useState([])
  const [queue, setQueue] = useState([
    "i","h","l","g","s","e"
  ])
  const [showNext, setShowNext] = useState(false)

  //grinch "n","h","r","c","g","i"
  //sleigh "i","h","l","g","s","e"

  const handleSubmit = (e) => {
    //alert(queue.join() == "g,r,i,n,c,h")
    //alert(queue.join() == "s,l,e,i,g,h")
    setShowNext((queue.join() == "s,l,e,i,g,h") || (stack.join() == "s,l,e,i,g,h"))
  }
  const handleReset = (e) => {
    setStack([])
    //setQueue(["n","h","r","c","g","i"])
    setQueue(["i","h","l","g","s","e"])
  }

  const handleStackButton = (e) => {
    if(stack.length > 0){
      setQueue([...queue, stack[0]])
      setStack(stack.slice(1))
    }
  }

  const handleQueueButton = (e) => {
    if(queue.length > 0){
      setStack([queue[0], ...stack ])
      setQueue(queue.slice(1))
    }
  }

  return (
    <>
      <div>
        <h2>Present Bag and Elves</h2>
        <p>To get into character the Grinch recreated Santa's present bag and elves toy factory...</p>
        <p>When Santa grabs a present from his bag, he takes the first one off of the top, regardless of how long a present has been in the bag.</p>
        <p>The Elves work in an orderly fashion where items need to wait until the item before them is complete before processing.</p>
        {
          // ["t","h","e","g","r","i","n","c","h"] .map(value => ({ value, sort: Math.random() }))
          // .sort((a, b) => a.sort - b.sort)
          // .map(({ value }) => value).map((s, i) => {
          // return s;
          // })
        }
      </div>
      <div className="sqleft">
        <b>Bag</b>
        <div className="word">
        {
          stack.map( (v, i) => {
            return (<div className="letter" key={i}>{v}</div>);
          })
        }
        </div>
        <button onClick={handleStackButton}>&uarr;</button>
      </div>
      <div className="sqright">
        <b>Elves</b>
        <div className="word">
        {
          queue.map( (v, i) => {
            return (<div className="letter" key={i}>{v}</div>);
          })
        }
        </div>
        <button onClick={handleQueueButton}>&larr;</button>
      </div>
      <div className="buttonsection">
        <button className="submit" onClick={handleSubmit}>Submit</button>
        <button className="reset" onClick={handleReset}>Reset</button>
        { showNext && <div className="next"><Link to="/match4">Next</Link></div>  }
      </div>
    </>
  )
}

export default Stackandqueue
