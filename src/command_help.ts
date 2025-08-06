import { CLICommand } from "./command"

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log('Welcome to the Pokedex!\nUsage:\n\nhelp: Displays a help message\nexit: Exit the Pokedex')
};