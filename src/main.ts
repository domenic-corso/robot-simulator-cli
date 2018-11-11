import * as readline from 'readline'

import App from './classes/App'
import Command from './classes/commands/Command';
import PlaceCommand from './classes/commands/PlaceCommand';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const app = new App()
const commands: Command[] = [
    new PlaceCommand((x, y, direction) => {
        app.place(x, y, direction)
    })
]

const promptForCommand = () => {
    rl.question('Enter a command: ', (userInput: string) => {
        let isInvalidCommand = true

        for (const command of commands) {
            const commandResult: boolean = command.try(userInput)

            if (commandResult === true) {
                isInvalidCommand = false
            }
        }

        if (isInvalidCommand) {
            console.log('Invalid command. Try again.')
        }

        promptForCommand()
    })
}

promptForCommand()
