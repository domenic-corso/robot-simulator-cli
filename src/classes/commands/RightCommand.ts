import Command from "./Command";

class RightCommand extends Command {
    constructor (callback: Function) {
        super(callback)
        this.pattern = /^RIGHT/i
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

export default RightCommand
