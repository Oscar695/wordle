import { useEffect, useState } from 'react'
import './App.css'
import { getLetterResult } from './logic/wordlelogic'
import wordList from './assets/WORDS.txt?raw'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState([])
  const [hasWon, setHasWon] = useState(false)
  const [answer, setAnswer] = useState("")
  const [invalidWord, setInvalidWord] = useState(false)
  const [loss, setLoss] = useState(false)

  const list = wordList.split("\n")

  useEffect(() => {
    const result = list[Math.floor(Math.random() * list.length)]
    setAnswer(result.toUpperCase())
    console.log(result)
  }, [])

  const createRow = (rowIndex) => {
    const boxes = []

    for (let i = 0; i < 5; i++) {
      const letterInBox = guesses[rowIndex] ? guesses[rowIndex][i]: " "
      const boxClass = "letterBox" + " " + getLetterResult(i, answer, letterInBox)
      const box = <div className={boxClass}>{letterInBox}</div>
      boxes.push(box)
    }
    return boxes
  }

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
  if (currentGuess.length !== 5) return 
  if (!list.includes(currentGuess.toLowerCase())) setInvalidWord(true)
  if (!list.includes(currentGuess.toLowerCase())) return
  setGuesses([...guesses, currentGuess])
  setHasWon(currentGuess === answer)
  if (currentGuess === answer) setInvalidWord(false)
  if ((currentGuess !== answer) & (guesses.length >= 5)) setLoss(true)
  setCurrentGuess("")
}

const onImputChange = (event) => {
  if (guesses.length >= 6) return
  if (hasWon === true) return
  if (list.includes(currentGuess)) setInvalidWord(false) 
  let value = event.target.value
  value = value.replace(/[^A-Za-z]/ig, "")
  setCurrentGuess(value.toUpperCase())
}

  return (
    <>


      <div>
      {(hasWon) ? <p className="result-text">You Win</p> : null}
      {(invalidWord) ? <p className="result-text">Enter valid word</p> : null}
      {(loss) ? <p className="result-text">You lose the answer was {answer}</p> : null}
      </div>

      <div>
          {createGrid()}
      </div>
      
      <form onSubmit={onSubmitGuess}>
        <div className="imputbox"> 
          <input type="text" value={currentGuess} id="guessImput" onChange={onImputChange} maxLength={5} />
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
