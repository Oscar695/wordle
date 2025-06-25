const SubmitForm = ({
    currentGuess, 
    list, 
    setInvalidWord, 
    guesses, 
    setGuesses, 
    setHasWon, 
    answer, 
    setLoss, 
    setCurrentGuess, 
    hasWon
}) => {
    
    const onSubmitGuess = (event) => {
        event.preventDefault()
        if (currentGuess.length !== 5) return 
        if (!list.includes(currentGuess.toLowerCase())) setInvalidWord(true)
        if (!list.includes(currentGuess.toLowerCase())) return
        setGuesses([...guesses, currentGuess])
        console.log(answer)
        console.log(currentGuess)
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
        <form onSubmit={onSubmitGuess}>
            <div className="imputbox"> 
                <input type="text" value={currentGuess} id="guessImput" autoComplete="off" onChange={onImputChange} maxLength={5} />
            </div> 

            <div>
                <button onClick={() => console.log("clicked")}>
                    Submit
                </button>
            </div> 
        </form>
    )
}

export default SubmitForm