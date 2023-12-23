import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Match4() {
  const [count, setCount] = useState(0)
  const [answers, setAnswers] = useState([
    {
      "title": "Snow____",
      "items": [
        "Ball",
        "Blower",
        "Pants",
        "Shovel"
      ],
      "visible": false
    },
    {
      "title": "Things on a tree",
      "items": [
        "Lights",
        "Ornaments",
        "Skirt",
        "Star"
      ],
      "visible": false
    },
    {
      "title": "Types of cookies",
      "items": [
        "Bar",
        "Gingerbread",
        "Holly",
        "Spritz"
      ],
      "visible": false
    },
    {
      "title": "Wrap presents with _____",
      "items": [
        "Bow",
        "Paper",
        "Ribbon",
        "Tape"
      ],
      "visible": false
    }
  ])
  // const [optionslist, setOptionslist] = useState([
  //   { "value": "Ball", "visible": true, "selected": false },
  //   { "value": "Blower", "visible": true, "selected": false },
  //   { "value": "Pants", "visible": true, "selected": false },
  //   { "value": "Shovel", "visible": true, "selected": false },
  //   { "value": "Lights", "visible": true, "selected": false },
  //   { "value": "Ornaments", "visible": true, "selected": false },
  //   { "value": "Skirt", "visible": true, "selected": false },
  //   { "value": "Star", "visible": true, "selected": false },
  //   { "value": "Bar", "visible": true, "selected": false },
  //   { "value": "Gingerbread", "visible": true, "selected": false },
  //   { "value": "Holly", "visible": true, "selected": false },
  //   { "value": "Spritz", "visible": true, "selected": false },
  //   { "value": "Bow", "visible": true, "selected": false },
  //   { "value": "Paper", "visible": true, "selected": false },
  //   { "value": "Ribbon", "visible": true, "selected": false },
  //   { "value": "Tape", "visible": true, "selected": false }
  // ])
  const [optionslist, setOptionslist] = useState([
    {"value":"Ribbon","visible":true,"selected":false},
    {"value":"Ornaments","visible":true,"selected":false},
    {"value":"Gingerbread","visible":true,"selected":false},
    {"value":"Star","visible":true,"selected":false},
    {"value":"Blower","visible":true,"selected":false},
    {"value":"Bow","visible":true,"selected":false},
    {"value":"Paper","visible":true,"selected":false},
    {"value":"Skirt","visible":true,"selected":false},
    {"value":"Bar","visible":true,"selected":false},
    {"value":"Tape","visible":true,"selected":false},
    {"value":"Spritz","visible":true,"selected":false},
    {"value":"Ball","visible":true,"selected":false},
    {"value":"Lights","visible":true,"selected":false},
    {"value":"Holly","visible":true,"selected":false},
    {"value":"Shovel","visible":true,"selected":false},
    {"value":"Pants","visible":true,"selected":false}
  ]);

  const [selections, setSelections] = useState([])

  const handleSelect = (e) => {
    let selection = e.target.innerHTML
    let selectedItem = optionslist.find( o => o.value == selection );
    let selectedItems = optionslist.filter( o => o.selected === true);

    if (selectedItems.length >= 4 && selectedItem.selected === false){
      return false;
    }

    setOptionslist(optionslist.map(o => {
      if (o.value === selection) {
        return { ...o, selected: !o.selected };
      } else {
        // No changes
        return o;
      }
    }));
  }

  const handleSubmit = (e) => {
    let selectedItems = optionslist.filter( o => o.selected === true);
    if (selectedItems.length != 4){
      alert("You must select 4 items...")
    }else{
      let items = []
      selectedItems.map((s, i) => {
        items.push(s.value)
      })
      items.sort();
      let check = answers.find( a => JSON.stringify(a.items) == JSON.stringify(items) )
      if(check){
        setAnswers(answers.map( a => {
          if (a.title == check.title){
            return { ...a, visible: true };
          } else {
            return a;
          }
        }))
        setOptionslist(optionslist.map(o => {
          if ( check.items.indexOf(o.value) > -1) {
            return { ...o, visible: false, selected: false };
          } else {
            // No changes
            return o;
          }
        }));
      }else{
        alert("Did not match...")
      }

    }
  }

  return (
    <>
      <div>
        <h2>Christmas Commonality</h2>
        <p>Bing Crosb, Danny Kaye, Rosemary Clooney and Vera-Ellen are all connected to White Christmas. Can you find other groups of four that share a commonality?</p>
      </div>
      <div>
      { answers.map((a, i) => {
        if (a.visible){
          return (<div className={"answer color" + i} key={i}>
            <h3>{a.title}</h3>
            <p>{JSON.stringify(a.items)}</p></div>)
        }else {
          return ""
        }

      })}
      </div>
      <div>
      { optionslist.map((s, i) => {
            return (s.visible ? <button className={(s.selected) ? "match4 selected i" + (i % 4)  : "match4 i" + (i % 4)} onClick={handleSelect} key={i}>{s.value}</button> : "")
        })}
      </div>
      <button className="submit" onClick={handleSubmit}>Submit</button>
      <div>
      {
      // optionslist
      //     .map(value => ({ value, sort: Math.random() }))
      //     .sort((a, b) => a.sort - b.sort)
      //     .map(({ value }) => value).map((s, i) => {
      //       return JSON.stringify(s);
      //   })
      }
      </div>
    </>
  )
}

export default Match4
