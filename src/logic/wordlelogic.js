const getLetterResult = (index, answer, guess) => {
    if (answer[index] === guess) return "green"
    else if (answer.includes(guess)) return "yellow"
    else return "grey"
}
export {getLetterResult}