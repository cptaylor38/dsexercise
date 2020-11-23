'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let matches = 0;
    let count = 0;
    let remainder = n % s.length;
    if(s.length === 1 && s[0] === 'a') return n;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a') matches++;
    }
    for(let i = 0; i< remainder; i++){
        if(s[i] === 'a') count++;
    }
    
    count += (((n - remainder) / s.length) * matches);
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
