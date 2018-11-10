import Robot from './Robot'
import Board from './Board'
import BoardDirection from '../enums/BoardDirection';
import BoardPiece from './BoardPiece';

class App {
    readonly boardSize: number = 5

    private board: Board
    private robotPiece: BoardPiece
    private robot: Robot

    constructor () {
        this.board = new Board(this.boardSize)
        this.robot = new Robot()
        this.robotPiece = new BoardPiece(this.robot)
    }

    /**
     * Places the robot on a given (x, y) coordinate, facing a given
     * direction.
     * 
     * @param  {number} x
     * @param  {number} y
     * @param  {BoardDirection} direction
     * @returns void
     */
    public place (x: number, y: number, direction: BoardDirection): void {
        if (!this.board.inBounds(x, y)) {
            return
        }

        this.robotPiece.direction = direction
        this.board.placePiece(this.robotPiece, x, y)
    }
}

export default App
