import BoardRenderer from "./BoardRenderer";
import Board from "./Board"

class ConsoleBoardRenderer extends BoardRenderer {
    constructor (board: Board) {
        super(board)
    }

    /**
     * Renders the board to the console.
     * 
     * @returns void
     */
    public render (): void {
        const size = this.board.getSize()

        console.log('= '.repeat(size))

        for (let y = 0; y < size; y++) {
            let rowText = ''

            for (let x = 0; x < size; x++) {
                const char: string = this.board.getPieceAt(x, y) === null ? '.' : 'R'
                rowText += char + ' '
            }

            console.log(rowText)
        }

        console.log('= '.repeat(size))
    }
}

export default ConsoleBoardRenderer
