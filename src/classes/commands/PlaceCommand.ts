import Command from "./Command";
import BoardDirection from "../../enums/BoardDirection";
import Board from "../Board";

class PlaceCommand extends Command {
    constructor (callback: Function) {
        super(callback)
        this.pattern = /^PLACE (\d+),(\d+),(NORTH|EAST|SOUTH|WEST)$/i
    }

    public try (userInput: string): boolean {
        const matches: RegExpExecArray = this.pattern.exec(userInput)

        if (matches !== null) {
            const x: number = parseInt(matches[1])
            const y: number = parseInt(matches[2])
            const direction: BoardDirection = this.getDirectionFromText(matches[3])

            this.callback(x, y, direction)
            return true
        }

        return false
    }

    /**
     * Converts either 'north', 'east', 'south' or 'west' into its
     * BoardDirection equivalent.
     * 
     * @param  {string} text
     * @returns BoardDirection
     */
    private getDirectionFromText (text: string): BoardDirection {
        switch (text.toLowerCase()) {
            case 'north':
            default:
            return BoardDirection.North

            case 'east':
            return BoardDirection.East

            case 'south':
            return BoardDirection.South

            case 'west':
            return BoardDirection.West
        }
    }
}

export default PlaceCommand
