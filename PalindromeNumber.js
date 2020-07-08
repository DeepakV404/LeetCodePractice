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