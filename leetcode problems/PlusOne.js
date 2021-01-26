// https://leetcode.com/problems/plus-one/

// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function(digits) {
    let i = digits.length-1;
   while(digits[i] === 9) 
       digits[i--] = 0;
   if(i < 0) 
       digits.splice(0,0,1);
   else 
       digits[i]++;
   return digits;
};