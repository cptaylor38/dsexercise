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
    let bribes = 0;
    let lowest;
    //2 1 5 3 4
    for(let i = q.length; i>0; i--){ //
       //working backwords, see how many numbers are greater than q[i] and add to bribes
       //if q[i] - lowest index > 2. then too chaotic?
       if(!lowest) lowest = q[i];
       else{
           if(q[i] > lowest){
               if(q[i] - lowest > 2) return console.log('Too chaotic');
               else bribes += 1;
           }
           else lowest = q[i];
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
