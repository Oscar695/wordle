import Box from './Box'
import { getLetterResult } from './logic/wordlelogic'

const Row = ({guesses, answer, rowIndex}) => {
    const createRow = (rowIndex) => {
        const boxes = []
    
        for (let i = 0; i < 5; i++) {
          const letterInBox = guesses[rowIndex] ? guesses[rowIndex][i]: " "
          const boxClass = "letterBox" + " " + getLetterResult(i, answer, letterInBox)
          const box = <Box letterInBox={letterInBox} boxClass={boxClass} />
          boxes.push(box)
        }
        return boxes
    }

    return <div className="boxRow">{createRow(rowIndex)}</div>
}

export default Row