import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState([])


  const createRow = (rowIndex) => {
    const boxes = []

    for (let i = 0; i < 5; i++) {
      const box = <div className="letterBox">{(guesses[rowIndex] ? guesses[rowIndex][i]: "")}</div>
      boxes.push(box)
    }
    return boxes
  }

  // if answer[] === guesses[][] add className green
  // else if answer.includes(guesses[][]) add className yellow
  // else add className grey

  const createGrid = () => {
    const grid = []

    for (let i = 0; i < 6; i++) {
      const row = <div className="boxRow">{createRow(i)}</div>
      grid.push(row)
    }
    return grid
  }

const onSubmitGuess = (event) => {
  event.preventDefault()
  setGuesses([...guesses, currentGuess])
  setCurrentGuess("")
}

const onImputChange = (event) => {
  let value = event.target.value
  value = value.replace(/[^A-Za-z]/ig, "")
  setCurrentGuess(value.toUpperCase())
}

  return (
    <>
      <div>
        {createGrid()}
      </div>
      
      <form onSubmit={onSubmitGuess}>
        <div className="imputbox"> 
          <input type="text" value={currentGuess} id="guessImput" onChange={onImputChange} maxLength={5} minLength={5} />
        </div> 

        <div>
          <button onClick={() => console.log("clicked")}>
            Submit
          </button>
        </div> 
      </form>
    </>
  )
}

export default App
