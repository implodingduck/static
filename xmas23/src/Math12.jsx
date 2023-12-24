import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from "react-router-dom";

function Math12() {

  const [answer, setAnswer] = useState("")
  const [showNext, setShowNext] = useState(false)

  const handleSubmit = (e) => {
    setShowNext(answer.trim() == "75")//Check to see if value is 75
  }

  return (
    <>
      <div className="math12">
        <h2>Twelve Days of Math-mas</h2>
        <p>Looks like the Grinch has been stealing Christmas for 12 days...</p>
        <p><span>A = </span><img src="tdom12.png" /><span> / </span><img src="tdom3.png" /></p>
        <p><span>B = </span><img src="tdom11.png" /><span> * </span><img src="tdom2.png" /></p>
        <p><span>C = </span><img src="tdom10.png" /><span> + </span><img src="tdom1.png" /></p>
        <p><span>X = </span><img src="tdom9.png" /><span> - </span><img src="tdom4.png" /></p>
        <p><span>Y = </span><img src="tdom8.png" /><span> + </span><img src="tdom6.png" /></p>
        <p><span>Z = </span><img src="tdom7.png" /><span> * </span><img src="tdom5.png" /></p>

        <p><span>(A + C) * X / ((B + Y) - Z) = ?</span></p>
      </div>

      <fieldset>
        <label>Answer: <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value) } /></label>
      </fieldset>

      <div>
        <button className="submit" onClick={handleSubmit}>Submit</button>
        { showNext && <div className="next"><Link to="/sq">Next</Link></div>  }
      </div>
      <div className="footer">
        <p>* means multiplication</p>
        <p>Image by <a href="https://www.freepik.com/free-vector/watercolor-12-days-christmas-illustration_20550713.htm">Freepik</a></p>
      </div>
    </>
  )
}

export default Math12
