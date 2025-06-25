const Result = ({hasWon}) => {
    const message = (hasWon) ? <p className="result-text">You Win</p> : null
    return message
}

export default Result