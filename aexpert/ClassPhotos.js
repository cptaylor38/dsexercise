function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
      redShirtHeights.sort((a,b)=> b - a);
      blueShirtHeights.sort((a,b)=> b - a);
      let previousTallest;
      for(let i = 0; i < redShirtHeights.length; i++){
          if(redShirtHeights[i] === blueShirtHeights[i]) return false;
          if(redShirtHeights[i] > blueShirtHeights[i]){
              if(previousTallest === 'blue') return false;
              else previousTallest = 'red';
          }
          else if(blueShirtHeights[i] > redShirtHeights[i]){
              if(previousTallest === 'red') return false;
              else previousTallest = 'blue';
          }
      }
    return true;
  }

  //example input: 
  // redshirts [1, 4, 8, 7, 3]
  // blueshirts [2, 5, 9, 8, 4]

  //My logic - loop through an array (both arrays are the same length)
  // See record the tallest student in each iteration and the color of their shirt
  // If the tallest student's shirt color changes - the pattern is broken - 
  // Meaning that the requirement that all tallest students must be in the back row and of the same
  //        shirt color cannot be satisfied by the selection.