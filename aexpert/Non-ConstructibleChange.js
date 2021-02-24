function nonConstructibleChange(coins) {
    // Write your code here.
      coins.sort();
      let missingChange;
      if(coins.length === 0) return 1;
      for(let i = 0; i < coins.length; i++){
          if(coins[i - 1] !== coins[i] - 1) missingChange = coins[i] - 1;
          if(missingChange){
              let sum = 0;
              for(let j = 0; j < i; j++){
                  if(sum === missingChange) break;
                  else sum += coins[j];
              }
              if(sum !== missingChange) return missingChange;
          }
      }
      
      if(!missingChange){
          let nextNum = coins[coins.length - 1] + 1;
          let sum = 0;
          while(!missingChange){
              for(let c = 0; c < coins.length; c++){
                  if(sum === nextNum) nextNum++;
                  else sum += coins[c];
              }
              if(sum !== nextNum){
                  missingChange = nextNum;
              }
          }
      }
      
      return missingChange;
  }
