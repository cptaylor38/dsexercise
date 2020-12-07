'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    // if(a === b) return a.length;
    
    // if(a.length > b.length){
    //     for(let char of a){
    //         if(b.includes(char)){
    //             b.split(' ').splice(b.indexOf(char)).join('')
    //         }
    //     }
    // }
    // return b.length;

    //1 test case. 

// <-------------------------------------------------------------------->

    // if(a === b) return a.length;
    // let arrA = a.split('').sort();
    // let arrB = b.split('').sort();
    
    // if(a.length > b.length){
    //     for(let char of b){
    //         if(arrA.includes(char)){
    //             arrA.splice(arrA.indexOf(char), 1);
    //             arrB.splice(arrB.indexOf(char), 1);
    //         }
    //     }
    // }
    
    // if(b.length > a.length){
    //     for(let char of a){
    //         if(arrB.includes(char)){
    //             arrA.splice(arrA.indexOf(char), 1);
    //             arrB.splice(arrB.indexOf(char), 1);
    //         }
    //     }
    // }
    
    // return arrA.length + arrB.length;

    //2 test cases passed
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}