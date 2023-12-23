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
        <p>A = <img src="/tdom12.png" /> / <img src="/tdom3.png" /></p>
        <p>B = <img src="/tdom11.png" /> * <img src="/tdom2.png" /></p>
        <p>C = <img src="/tdom10.png" /> + <img src="/tdom1.png" /></p>
        <p>X = <img src="/tdom9.png" /> - <img src="/tdom4.png" /></p>
        <p>Y = <img src="/tdom8.png" /> + <img src="/tdom6.png" /></p>
        <p>Z = <img src="/tdom7.png" /> * <img src="/tdom5.png" /></p>

        <p>(A + C) * X / ((B + Y) - Z) = ???</p>
      </div>

      <fieldset>
        <label>Answer: <input type="text" /></label>
      </fieldset>

      <div>
        <button className="submit" onClick={handleSubmit}>Submit</button>
      </div>
      <div className="footer">
        <p>Image by <a href="https://www.freepik.com/free-vector/watercolor-12-days-christmas-illustration_20550713.htm">Freepik</a></p>
      </div>
    </>
  )
}

export default Math12
