// function tournamentWinner(competitions, results) {
//     // Write your code here.
//       let winners = {}
//       let tWinner = null;
//       for(let i = 0; i<results.length; i++){
//           let victor = competitions[i][results[i]]
//           console.log(victor)
//           if(winners[victor]) winners[victor] += 3;
//           else winners[victor] = 3;
//       }
      
//       for(let winner in winners){
//           if(!tWinner) tWinner = { name: winner, score: winners[winner]};
//           else{
//               if(winners[winner] > tWinner.score){
//                   tWinner.name = winner;
//                   tWinner.score = winners[winner];
//               }
//           }
//       }
      
//     return tWinner.name;
//   }

//Read solution wrong - 0 meant second item of current match and vice versa.

function tournamentWinner(competitions, results) {
    // Write your code here.
      
      const victorHelper = (winningIndex, currentMatch) => {
          return winningIndex === 0 ? currentMatch[1] : currentMatch[0];
      }
      
      let winners = {}
      let tWinner = null;
      for(let i = 0; i < results.length; i++){
          let winningIndex = results[i];
          let currentMatch = competitions[i];
          let victor = victorHelper(winningIndex, currentMatch);
          if(winners[victor]) winners[victor] += 3;
          else winners[victor] = 3;
          console.log(victor, results, competitions)
      }
      
      for(let winner in winners){
          if(!tWinner) tWinner = { name: winner, score: winners[winner]};
          else{
              if(winners[winner] > tWinner.score){
                  tWinner.name = winner;
                  tWinner.score = winners[winner];
              }
          }
          console.log(tWinner);
      }
      
    return tWinner.name;
  }
  
  