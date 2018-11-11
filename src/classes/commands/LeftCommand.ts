import Command from "./Command";

class LeftCommand extends Command {
    constructor (callback: Function) {
        super(callback)
        this.pattern = /^LEFT/i
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

export default LeftCommand
