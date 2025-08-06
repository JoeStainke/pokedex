import { createInterface } from "node:readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
export function cleanInput(input) {
    return input.trim().toLowerCase().split(/\s+/); // regex for one or more whitespace characters
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    rl.prompt(); // Call prompt on the interface instance
    rl.on("line", (input) => {
        const words = cleanInput(input);
        if (!words.length) {
            rl.prompt();
        }
        if (getCommands()[words[0]]) {
            try {
                getCommands()[words[0]].callback(getCommands());
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            console.log("Unknown command");
        }
        rl.prompt();
    });
}
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
    };
}
