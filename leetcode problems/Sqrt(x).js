// https://leetcode.com/problems/sqrtx/

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

var mySqrt = function(x) {
    return Math.abs(Math.floor(Math.sqrt(x)))
};