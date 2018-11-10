import BoardDirection from '../enums/BoardDirection'
import BoardPieceItem from '../interfaces/BoardPieceItem';

class BoardPiece {
    public direction: BoardDirection
    public item: BoardPieceItem

    constructor (item: BoardPieceItem) {
        // Direction 'east' by default
        this.direction = BoardDirection.East
        this.item = item
    }
}

export default BoardPiece
