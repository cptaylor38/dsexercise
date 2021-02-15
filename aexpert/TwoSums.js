// function twoNumberSum(array, targetSum) {
//     // Write your code here.
//       for(let i = 0; i < array.length; i++){
//           for(let j = i + 1; j < array.length; j++){
//                   if(array[j] !== array[i]){
//                       if((array[i] + array[j]) === targetSum) return [array[j], array[i]]
//                   }
//           }
//       }
//       return []
//   }

  //Function for finding elements in an array that sum up to targetSum.


// function twoNumberSum(array, targetSum){
//     const nums = {};
//     // [1, 2, 3, 5, -2, 8], target sum = 7.
//     // num = 1. potential match = 6. Is six found in the array? No, moving on.
//     // num = 2. potential match = 5. 5 is found in the array, so return [2, 5]
//     //nums object
//     for(const num of array){
//         //looping through array
//         const potentialMatch = targetSum - num;
//         //creating a variable that holds the value of the target value - current iterated number in array
//         if(potentialMatch in nums){
//             //if the difference between target sum - current iterated num is in the nums object
//             return [potentialMatch, num];
//             //return the difference - that is found in the nums object, plus the current num?
//         } else {
//             nums[num] = true;
//             instantiating the number as a property in the nums hash table object and setting value to be true. 
//         }
//     }
//     return [];
// }

