import * as readline from 'readline'

import App from './classes/App'
import Command from './classes/commands/Command';
import PlaceCommand from './classes/commands/PlaceCommand';
import MoveCommand from './classes/commands/MoveCommand';
import LeftCommand from './classes/commands/LeftCommand';
import RightCommand from './classes/commands/RightCommand';
import ReportCommand from './classes/commands/ReportCommand';
import BoardRenderer from './classes/BoardRenderer';
import ConsoleBoardRenderer from './classes/ConsoleBoardRenderer';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const app: App = new App()
const boardRenderer: BoardRenderer = new ConsoleBoardRenderer(app.getBoard())
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
            if (!(command instanceof PlaceCommand) && !app.robotHasBeenPlaced()) {
                console.log('Robot needs to be placed before you do anything else.')
                break
            }

            const commandResult: boolean = command.try(userInput)

            if (commandResult === true) {
                isInvalidCommand = false
                boardRenderer.render()
            }
        }

        if (isInvalidCommand) {
            console.log('Invalid command. Try again.')
        }

        promptForCommand()
    })
}

promptForCommand()
