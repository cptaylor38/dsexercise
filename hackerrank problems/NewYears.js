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
if(i < ci){
    //if (2 < 4)
    //if (5 < 6)
    //if(6 < 7)
    if((ci - i) > 2){
       return console.log('Too chaotic');
    }
    else{
        if(ci - i === 1){ //if 4 - 2 = 1
        //if(6 - 5 = 1)
        //if(7 - 6 = 1)
            if(q[i] > q[i+2]) bribes += 2;
            //bribes += 2. bribes = 4;
            //bribes +=2. bribes = 6;
        }
        else bribes += ci - i;
        //bribes += 4 - 2 = 2. bribes = 2;
    }
}






function minimumBribes(q) {
    // need to optimize. exceeded time limit on 4 tests. figure out how to rewrite this
    //to O(n) at least.
    let bribes = 0;
   for(let i = q.length; i >= 0; i--){ 
       if((q[i] - 1) - i > 2) return console.log('Too chaotic');
       for(let j = 0; j < i; j++){ 
           if(q[i] < q[j]){ 
               bribes += 1;
           }
       }
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
