import BoardDirection from '../enums/BoardDirection'

class BoardPiece {
    public direction: BoardDirection

    constructor () {
        // Direction 'east' by default
        this.direction = BoardDirection.East
    }
}

export default BoardPiece
