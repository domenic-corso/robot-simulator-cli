import * as readline from 'readline'

import App from './classes/App'
import Command from './classes/commands/Command';
import PlaceCommand from './classes/commands/PlaceCommand';
import MoveCommand from './classes/commands/MoveCommand';
import LeftCommand from './classes/commands/LeftCommand';
import RightCommand from './classes/commands/RightCommand';
import ReportCommand from './classes/commands/ReportCommand';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const app = new App()
const commands: Command[] = [
    new PlaceCommand((x, y, direction) => app.place(x, y, direction)),
    new MoveCommand(() => app.move()),
    new LeftCommand(() => app.left()),
    new RightCommand(() => app.right()),
    new ReportCommand(() => app.report())
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
