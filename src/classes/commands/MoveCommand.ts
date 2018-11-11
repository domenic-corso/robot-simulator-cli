import Command from "./Command";

class MoveCommand extends Command {
    constructor (callback: Function) {
        super(callback)
        this.pattern = /^MOVE$/i
    }

    /**
     * Tries to execute this command based on user input.
     * 
     * @param  {string} userInput
     * @returns boolean
     */
    public try (userInput: string): boolean {
        return super.try(userInput)
    }
}

export default MoveCommand
