import BoardDirection from '../enums/BoardDirection'
import PlaceableOnBoard from '../interfaces/PlaceableOnBoard';

class BoardPiece {
    public direction: BoardDirection
    public item: PlaceableOnBoard

    constructor (item: PlaceableOnBoard) {
        // Direction 'east' by default
        this.direction = BoardDirection.East
        this.item = item
    }
}

export default BoardPiece
