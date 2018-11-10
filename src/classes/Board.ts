import BoardPiece from './BoardPiece'

class Board {
    private size: number
    private grid: BoardPiece[][]

    constructor (size: number) {
        this.size = size
        this.grid = []
        
        // Construct grid
        for (let x = 0; x < this.size; x++) {
            const a: BoardPiece[] = []
            this.grid.push(a)

            for (let y = 0; y < this.size; y++) {
                a.push(null)
            }
        }
    }
}

export default Board
