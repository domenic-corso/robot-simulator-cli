import Board from "./Board";

abstract class BoardRenderer {
    protected board: Board

    constructor (board: Board) {
        this.board = board
    }
    /**
     * Renders the board to some form of output.
     * 
     * @returns void
     */
    public render (): void {

    }
}

export default BoardRenderer
