import { readFileLines } from "../utils";

export async function solve(input: string) {
    const numbersChars = ['1','2','3','4','5','6','7','8','9']
    const textToNumberMap = {'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9' }
    const pattern = /one|two|three|four|five|six|seven|eight|nine/g;

    let sum = 0;
    const lines: string[] = await readFileLines(input);
    for (const line of lines) {
        let numberForThisLine = '';
        let match;
        // while ((match = pattern.exec(line)) !== null) {
        //     console.log(`Found '${match[0]}' at index ${match.index}`);
        // }
        for(const char of line) {
            if(numbersChars.includes(char)) {
                if(numberForThisLine.length < 2){
                    numberForThisLine += char;
                }
                else {
                    numberForThisLine = numberForThisLine[0] + char;
                }
            }
            // if (word.match(pattern)){
            //     if(numberForThisLine.length < 2){
            //         numberForThisLine += textToNumberMap[word as keyof typeof textToNumberMap];
            //     }
            //     else {
            //         numberForThisLine = numberForThisLine[0] + textToNumberMap[word as keyof typeof textToNumberMap];
            //     }
            //     console.log(word)
            //     word = '';
            // }
        }
            if(numberForThisLine.length < 2){
                numberForThisLine += numberForThisLine[0];
            } 
            sum += parseInt(numberForThisLine);
    }

    return sum;



}
