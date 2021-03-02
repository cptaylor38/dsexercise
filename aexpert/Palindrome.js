function isPalindrome(string) {
    // Write your code here.
      let nonReversed = string;
      let reversed = string.split('').reverse().join('');
      return nonReversed === reversed;
  }