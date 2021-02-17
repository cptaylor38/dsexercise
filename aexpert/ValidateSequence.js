//My Solution:

function isValidSubsequence(array, sequence) {
    // Write your code here.
      let lastFoundIndex = 0;
      if(sequence.length > array.length) return false;
      for(let i = 0; i < array.length; i++){
          if(array[i] === sequence[lastFoundIndex]) lastFoundIndex++;
      }
      if(lastFoundIndex === sequence.length) return true;
      else return false;
    }

//suggested solution:
// function isValidSubsequence(array, sequence){
//     let seqIdx = 0;
//     for(const value of array){
//         if(seqIdx === sequence.length) break;
//         if(sequence[seqIdx] === value) seqIdx++;
//     }
//     return seqIdx === sequence.length;
// }     

//Improvements over mine - 
// 1. For of loop for cleaner code instead of using array[i];
// 2. Single return comparing the index count to the length - need to remember this!


