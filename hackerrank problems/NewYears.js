const url = 'https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen'


'use strict';

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

const arrays = [];
let bribes = 0;
let result;
let message;
// Complete the minimumBribes function below.
function minimumBribes(q) {
    arrays.push(q);
    if(arrays.length > 1){
        let unsorted = arrays[1];
        let sorted = arrays[0].sort();
        for(let num of arrays[1]){
            if(unsorted.indexOf(num) > sorted.indexOf(num)){
                bribes += Math.abs(unsorted.indexOf(num) - sorted.indexOf(num))
            }
            if(bribes > 2) break;
        }
        if(bribes > 2){
             console.log(bribes);
             console.log('Too chaotic');
        }
        else console.log(bribes);
    }
 }


function main() {
    const t = parseInt(readLine(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);
        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));
        minimumBribes(q);
    }
}
