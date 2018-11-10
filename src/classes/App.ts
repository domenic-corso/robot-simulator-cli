import { mod as modulus } from 'mathjs'

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
     * Determines the difference in coordinates based on the
     * current direction of the board piece
     * 
     * @returns x
     */
    private determineMoveDifference (): {x, y} {
        switch (this.robotPiece.direction) {
            case BoardDirection.North:
            return {
                x: 0,
                y: -1
            }
            case BoardDirection.East:
            return {
                x: 1,
                y: 0
            }
            case BoardDirection.South:
            return {
                x: 0,
                y: 1
            }
            case BoardDirection.West:
            return {
                x: -1,
                y: 0
            }
        }

        return {
            x: 0,
            y: 0
        }
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
    
    /**
     * Moves the board piece one square forward in the direction
     * that it is facing.
     * 
     * @returns void
     */
    public move (): void {
        if (!this.board.hasPiece(this.robotPiece)) {
            return
        }

        // Determine the new coordinate for the board piece
        const current = this.board.getCoordinatesOf(this.robotPiece)
        const difference = this.determineMoveDifference()
        const newCoordinate = {
            x: current.x + difference.x,
            y: current.y + difference.y
        }

        this.board.placePiece(this.robotPiece, newCoordinate.x, newCoordinate.y)
    }

    /**
     * Rotates the direction of the board piece left.
     * 
     * @returns void
     */
    public left (): void {
        this.robotPiece.direction = modulus(this.robotPiece.direction - 1, 4) as number
    }

    /**
     * Rotates the direction of the board piece right.
     * 
     * @returns void
     */
    public right (): void {
        this.robotPiece.direction = modulus(this.robotPiece.direction + 1, 4) as number
    }
}

export default App
