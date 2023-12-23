import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Math12() {


  const handleSubmit = (e) => {
    //Check to see if value is 75
  }

  return (
    <>
      <div className="math12">
        <h2>Twelve Days of Math-mas</h2>
        <p>A = 12 / 3</p>
        <p>B = 11 * 2</p>
        <p>C = 10 + 1</p>
        <p>X = 9 - 4</p>
        <p>Y = 8 + 6</p>
        <p>Z = 7 * 5</p>

        <p>(A + C) * X / ((B + Y) - Z) = ???</p>
      </div>

      <fieldset>
        <label>Answer: <input type="text" /></label>
      </fieldset>

      <div>
        <button className="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Math12
