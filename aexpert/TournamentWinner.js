function tournamentWinner(competitions, results) {
    // Write your code here.
      let winners = {}
      let tWinner = null;
      for(let i = 0; i<results.length; i++){
          let victor = competitions[i][results[i]]
          console.log(victor)
          if(winners[victor]) winners[victor] += 3;
          else winners[victor] = 3;
      }
      
      for(let winner in winners){
          if(!tWinner) tWinner = { name: winner, score: winners[winner]};
          else{
              if(winners[winner] > tWinner.score){
                  tWinner.name = winner;
                  tWinner.score = winners[winner];
              }
          }
      }
      
    return tWinner.name;
  }
  