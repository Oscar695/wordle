import Row from "./Row"

const Grid = ({guesses, answer}) => {

const createGrid = () => {
    const grid = []
 
    for (let i = 0; i < 6; i++) {
      const row = <Row guesses={guesses} answer={answer} rowIndex={i}/>
      grid.push(row)
    }
    return grid
}
    return <div>{createGrid()}</div>
}

export default Grid