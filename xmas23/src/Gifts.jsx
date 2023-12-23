import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from "react-router-dom";

function Gifts() {
  const [name, setName] = useState("")
  const [mom, setMom] = useState(false)
  const [dad, setDad] = useState(false)
  const [bk, setBk] = useState(false)
  const [julia, setJulia] = useState(false)

  const handleNameChange = (e) => {
    let newName = e.target.value;
    setName(newName)
    if(newName.toLowerCase().indexOf("cheryl") > -1 || newName.toLowerCase().indexOf("mom") > -1){
      setMom(true)
    }else{
      setMom(false)
    }
    if(newName.toLowerCase().indexOf("paul") > -1 || newName.toLowerCase().indexOf("dad") > -1){
      setDad(true)
    }else{
      setDad(false)
    }
    if(newName.toLowerCase().indexOf("bryce") > -1 || newName.toLowerCase().indexOf("katie") > -1){
      setBk(true)
    }else {
      setBk(false)
    }
    if(newName.toLowerCase().indexOf("julia") > -1){
      setJulia(true)
    }else {
      setJulia(false)
    }
  }

  return (
    <>
      <div>
        <h2>Its time for Presents!</h2>
        <p>Thank you for playing.</p>
        <fieldset>
          <label>Name: <input type="text" value={name} onChange={handleNameChange} /></label>
        </fieldset>
      </div>
      <div>
        { mom && <div className="mom"><img src="nf23.png" /></div>  }
        { dad && <div className="mom">We donated to Rotary Club for Community Economic Development in your honor and also here is a Netflix cover:<br /> <img src="nf23.png" /></div>  }
        { bk && <div>We donated to Child's play in your honor!</div> }
        { julia && <div>Merry Christmas, Julia!</div> }
        { (mom || dad || bk || julia) && <div styl><Link to="/">Play Again...</Link></div> }
      </div>

    </>
  )
}

export default Gifts
