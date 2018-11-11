abstract class Command {
    protected pattern: RegExp
    protected callback: Function

    constructor (callback: Function) {
        this.callback = callback
    }

    /**
     * Tries to execute this command based on user input.
     * 
     * @param  {string} userInput
     * @returns boolean
     */
    public try (userInput: string): boolean {
        return false
    }
}

export default Command
