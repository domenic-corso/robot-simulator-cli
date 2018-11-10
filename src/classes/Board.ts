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
        return this.getCoordinatesOf(piece) !== null
    }

    /**
     * Gets the coordinates of a given piece on the board. Returns
     * null if not found.
     * 
     * @param  {BoardPiece} piece
     * @returns {x, y}
     */
    public getCoordinatesOf (piece: BoardPiece): {x, y} {
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                if (this.grid[x][y] === piece) {
                    return {x, y}
                }
            }
        }

        return null
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
     * Places a board piece to the board. Works with new or existing
     * pieces. Returns true on success, false on failure.
     * 
     * @param  {BoardPiece} piece
     * @returns boolean
     */
    public placePiece (piece: BoardPiece, x: number, y: number): boolean {
        if (this.getPieceAt(x, y) !== null || !this.inBounds(x, y)) {
            return false
        }

        const existingCoordinate = this.getCoordinatesOf(piece)

        // If the given piece is already on the board then remove
        // it from it's current coordinate before moving it to its
        // new coordinate
        if (existingCoordinate !== null) {
            this.grid[existingCoordinate.x][existingCoordinate.y] = null
        }

        this.grid[x][y] = piece

        return true
    }
}

export default Board
