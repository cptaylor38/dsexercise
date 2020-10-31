function sumUp(n){
    let result = 0;
    for(let i = 1; i <= n; i++){
        result += i;
    }
    return console.log(result);
}

//this was linear time


function sumUp2(n){
    return console.log((n/2 * (1 + n)))
    // 5 / 2 = 2.5
    // 1 + 5 = 6
    // 6 * 2.5 = 15.
}

function arraySum(array){
    let result = 0;
    for(let num of array){
        result += num
    }
    return console.log(result);
}

//linear O(n) because it depends on the size of the array.

function arraySum2(array){
    
}

arraySum([1, 3, 10]);

