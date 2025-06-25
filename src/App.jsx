import { useEffect, useState } from 'react'
import './App.css'
import wordList from './assets/WORDS.txt?raw'
import Result from './Result'
import Grid from './Grid'
import SubmitForm from './SubmitForm'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState([])
  const [hasWon, setHasWon] = useState(false)
  const [answer, setAnswer] = useState("")
  const [invalidWord, setInvalidWord] = useState(false)
  const [loss, setLoss] = useState(false)

  const list = wordList.split("\r\n")

  useEffect(() => {
    const result = list[Math.floor(Math.random() * list.length)]
    setAnswer(result.toUpperCase())
    console.log(result)
  }, [])

  return (
    <>
      <div>
        <Result hasWon={hasWon} />
        {(invalidWord) ? <p className="result-text">Enter valid word</p> : null}
        {(loss) ? <p className="result-text">You lose the answer was {answer}</p> : null}
      </div>

      <Grid guesses={guesses} answer={answer}/>

      <SubmitForm 
        currentGuess={currentGuess} 
        list={list} 
        setInvalidWord={setInvalidWord} 
        guesses={guesses} 
        setGuesses={setGuesses} 
        hasWon={hasWon}
        setHasWon={setHasWon} 
        answer={answer} 
        setLoss={setLoss} 
        setCurrentGuess={setCurrentGuess}/>
    </>
  )
}

export default App