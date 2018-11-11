abstract class Command {
    protected pattern: RegExp
    protected callback: Function

    constructor (callback: Function) {
        this.callback = callback
    }

    public try (userInput: string): boolean {
        return false
    }
}

export default Command
