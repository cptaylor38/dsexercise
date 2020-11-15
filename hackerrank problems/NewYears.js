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
    let bribes = 0;
    let tooChaotic = false;
    for(let i = 0; i<q.length; i++){
        let ci = q[i] - 1;
        //2, 1, 5, 3, 4,
        if(i < ci){
            // if 0 < 1;
            //if 2 < 4.
            if((ci - i) > 2){
               //if 4 - 2 = 2 > 2. 
               tooChaotic = true;
                break;
            }
            else{
                bribes += ci - i;
                // bribes + 1 - 0 = 1. bribes = 1;
                //bribes + 4 - 2 = 2. bribes = 3;
            }
        }
        if(i > ci){
            //if 1 > 0
            //if 3 > 2.
            //if 4 > 3.
            bribes += i - q[i];
            //bribes + 1 - 1 = 0. bribes = 1;
            //bribes + 3 - 3 = 0. bribes = 3;
            //bribes + 4 - 4 = 0. bribes = 3;
        }

    }
    tooChaotic = true ? console.log('Too chaotic') : console.log(bribes);
}


function main() {
    const t = parseInt(readLine(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);
        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));
        minimumBribes(q);
    }
}
