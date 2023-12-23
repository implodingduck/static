import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Carols() {

  const [frosty, setFrosty] = useState("")
  const [chipmunks, setChipmunks] = useState("")
  const [rudolph, setRudolph] = useState("")
  const [sleigh, setSleigh] = useState("")

  const handleSubmit = (e) => {
    //Check to see if value is correct
    //play
    //Christmas
    //Games
    //together
    alert(frosty + " | " + chipmunks + " | " + rudolph + " | " + sleigh)
  }

  return (
    <>
      <div className="carols">
        <h2>The Grinch who stole lyrics</h2>
        <p>Uh oh! The Grinch stole lyrics from several Christmas carols... you will have to put them back.</p>

        <p>He could laugh and <input type="text" value={frosty}  onChange={(e) => setFrosty(e.target.value) } /><br />
Just the same as you and me </p>

<p>We can hardly stand the wait<br />
Please <input type="text" value={chipmunks} onChange={(e) => setChipmunks(e.target.value) } />, don't be late</p>

        <p>They never let poor Rudolph<br />
Join in any reindeer <input type="text" value={rudolph} onChange={(e) => setRudolph(e.target.value) } /></p>

<p>Come on, it’s lovely weather for a sleigh ride <input type="text" value={sleigh} onChange={(e) => setSleigh(e.target.value) } /> with you</p>
<button className="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Carols
