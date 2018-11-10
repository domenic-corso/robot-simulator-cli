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

    /**
     * Determines whether or not a given (x, y) coordinate is within
     * the bounds of the board.
     * 
     * @param  {number} x
     * @param  {number} y
     * @returns boolean
     */
    public inBounds (x: number, y: number): boolean {
        return (x >= 0 && x < this.size) && (y >= 0 && y < this.size)
    }

    /**
     * Determines whether or not a given board piece is currently
     * on the board.
     * 
     * @param  {BoardPiece} piece
     * @returns boolean
     */
    public hasPiece (piece: BoardPiece): boolean {
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                if (this.grid[x][y] === piece) {
                    return true
                }
            }
        }
        
        return false
    }

    /**
     * Returns the board piece at a given (x, y) coordinate. Will return
     * null if no board piece was found or if out of range.
     * 
     * @param  {number} x
     * @param  {number} y
     * @returns BoardPiece
     */
    public getPieceAt (x: number, y: number): BoardPiece {
        if (!this.inBounds(x, y)) {
            return null
        }
        
        return this.grid[x][y]
    }

    /**
     * Adds a board piece to the board. Returns true on success and
     * false on failure.
     * 
     * @param  {BoardPiece} piece
     * @returns boolean
     */
    public addPiece (piece: BoardPiece, x: number, y: number): boolean {
        if (this.getPieceAt(x, y) !== null || this.hasPiece(piece)) {
            return false
        }

        this.grid[x][y] = piece

        return true
    }
}

export default Board
