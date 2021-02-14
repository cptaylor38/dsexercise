let url = 'https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings';

// A string is said to be a special string if either of two conditions is met:

// All of the characters are the same, e.g. aaa.
// All characters except the middle one are the same, e.g. aadaa.
// A special substring is any substring of a string which meets one of those criteria. Given a string, determine how many special substrings can be formed from it.

let string = 'abcbabaaejejjfiefeiveivieivjeivajiejiejiajeiajeijaeijfjeee';
let stringLength = string.length;

// function substrCount(n, s) {
//     let count = n;
//     for(let i = 0; i < s.length; i++){
//         for(let j = i + 1; j < s.length; j++){
//              if(s[j] === s[j - 1]) count++;
//              else {
//                  if(s[j + 1] === s[i]) count++;
//                  else break;
//              }
//         }
//     }
//     return count;
//  }

//copied working solution to study
// function substrCount(n, s) {
//     let count = n;
//      let currentSequence = s[0];
//      for(let i = 1; i < n; i++){
//          if (s[i] === s[i-1]){
//              count+= currentSequence.length;
//              currentSequence = currentSequence + s[i];
//          } else {
//              for(let j = 0; j < currentSequence.length; j++){
//                  if(s[i + 1 + j] === currentSequence[0]){ count++; }
//                  else{ break; }
//              }
//              currentSequence = s[i];
//          }
//      }
//  return count;
//  }

// function substrCount(n, s) {
//     let knownSubstrings = 0;
//     let substring = '';
//     for(let i = 0; i < s.length; i++){
//         substring = '';
//         for(let j = i; j< s.length; j++){
//             substring += s[j];
//             if(s[j] === s[i]){ 
//                 if(substringCheck(substring)){ 
//                     knownSubstrings++; 
//                 }
//             }
//         }
//     }
//     return knownSubstrings;
// }

// function substringCheck(ss){
//     if(ss.length === 1) return true;
//     if(count >= ss.length - 1) return true;
// }

console.log(substrCount(stringLength, string))