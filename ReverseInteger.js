// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
    const result =  parseFloat(
                         x
                        .toString()
                        .split("")
                        .reverse()
                        .join("")
            
                    );
    var ans = result > 0x7FFFFFFF ? 0 : result*Math.sign(x);
    return ans
    };

console.log(reverse(123654));
console.log(reverse(-123654));
console.log(reverse(12365400000));
console.log(reverse(12365468732137));
console.log(reverse("214758"));
console.log(reverse("ad5465"));