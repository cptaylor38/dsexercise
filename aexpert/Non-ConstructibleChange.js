function nonConstructibleChange(coins) {
        // Write your code here.
        coins.sort();
        
        if(coins.length === 0) return 1;
        
        if(coins.indexOf(1) === -1) return 1;

        let missingCoins = [];
        for(let i = 0; i < coins.length; i++){
            //if 1 less than current coin is missing, add missing coin (coins[i - 1]), i
            //Reasoning, when iterating over missingCoins array, add all items of the array up to i
            // 1, 2, 4
            if(coins[i + 1] !== coins[i] + 1) missingCoins.push([coins[i] + 1, i]);
            // i = 0. coins[i] = 1. if coins[0 + 1] !== coins[i] + 1. 1 + 1 = 2. 
            //            if 2 !== 2.
            // i = 1. coins[1] = 2. if coins[1 + 1] !== coins[i] + 1. 2 + 1. = 3.
            //            if 2 !== 3. push(3, 1);
        }

        for(let missing of missingCoins){
            let sum = 0;
            for(let i = 0; i < missing; i++){
                sum += i;
                if(sum === missing) break;
            }
            if(sum !== missing) return missing[0];
        }
          
        if(!missingCoins.length){
            let sum = 0;
            for(let coin of coins){
                sum += coin;
            }
            return sum + 1;
        }
}

//1, 3, 4, 5, 6, 7, 8, 9 - Expected result 2.
nonConstructibleChange([1, 2, 4, 5])