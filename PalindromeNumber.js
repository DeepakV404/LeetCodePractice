// Determine whether an integer is a palindrome.
//An integer is a palindrome when it reads the same backward as forward.

// Example 1:
// Input: 121
// Output: true

var isPalindrome = function(x) {
    //converting the number into a string
    x = x + "";
    // Reversing the number
    y = x.split("").reverse().join("");
    //checking for palindrome numbers
    if(x == y){
        return true
    }else{
        return false
    }
}

console.log(isPalindrome(12345));
console.log(isPalindrome(45654));
console.log(isPalindrome(-123454321));

//Coud you solve it without converting the integer to a string?
var isItPalindrome = function(x) {
    orinum = x;
    revNumber = 0;
    while (x > 0) {
      revNumber = (revNumber * 10) + (x % 10);
      x = Math.floor(x / 10);
    }
      return(orinum == revNumber ? true : false)
  }

console.log(isItPalindrome(12345));
console.log(isItPalindrome(45654));
console.log(isItPalindrome(-123454321));