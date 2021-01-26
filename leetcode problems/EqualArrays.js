// Make Two Arrays Equal by Reversing Sub-arrays
// https://leetcode.com/submissions/detail/448134579/


var canBeEqual = function(target, arr) {
    if(target === arr) return true;
    if(target.length !== arr.length) return false;
    let sortedA = arr.sort((a, b) => a - b);
    let sortedB = target.sort((a, b) => a - b);
    if(sortedA.join('') === sortedB.join('')) return true;
    else return false;
};