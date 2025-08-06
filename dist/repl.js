import { createInterface } from "node:readline";
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
        if (!cleanInput(input).length) {
            rl.prompt();
        }
        else {
            console.log(`Your command was: ${cleanInput(words[0])}`);
            rl.prompt(); // Call prompt again to continue the loop
        }
    });
}
