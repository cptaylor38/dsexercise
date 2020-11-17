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
    for(let i = 0; i<q.length; i++){
        //1 2 5 3 4 7 8 6 9
        let ci = q[i] - 1;
        if(i < ci){
            if((ci - i) > 2){
               return console.log('Too chaotic');
            }
            else{
                bribes += ci - i;
                console.log('i= ' + i, 'ci= ' + ci, 'bribes= ' + bribes)
            }
        }
        else if(i > ci){
            //if(7 > 5)
            console.log(`${i} > ${ci}`)
            if(i !== q[i]){ 
                //if(7 !== 6)
                console.log(`${i} !== ${q[i]}`)
                bribes += q[i] - ci;
                //bribes += 6 - 5. bribes = +1;
                console.log(`bribes += ${q[i]} - ${ci} and bribes = ${bribes}`)
            }
        }
        console.log('index = ' + i, 'bribes = ' + bribes)
    }
    console.log(bribes);
}


function main() {
    const t = parseInt(readLine(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);
        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));
        minimumBribes(q);
    }
}
