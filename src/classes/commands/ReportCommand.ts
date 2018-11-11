import Command from "./Command";

class ReportCommand extends Command {
    constructor (callback: Function) {
        super(callback)
        this.pattern = /^REPORT/i
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

export default ReportCommand
