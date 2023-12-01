import * as fs from 'fs';
import * as readline from 'readline';

export function readFileLines(filename: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const lines: string[] = [];
        
        // Create a read stream
        const fileStream = fs.createReadStream(filename);

        // Create a readline interface
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        // Event for handling each line
        rl.on('line', (line) => {
            lines.push(line);
        });

        // Event for end of file
        rl.on('close', () => {
            resolve(lines);
        });

        // Event for handling error
        rl.on('error', (err) => {
            reject(err);
        });
    });
}

