// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant 
// to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
 
// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
const plusOne = (arr) => {
    arr[arr.length - 1] += 1; // Increment the last digit by one
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] === 10) { // If the digit is 10, carry over to the next digit
            arr[i] = 0;
            arr[i - 1] += 1;
        }
    }    
    if (arr[0] === 10) { // If the first digit is 10, we need to add a new digit
        arr[0] = 0;
        arr.unshift(1); // Add 1 at the beginning of the array
    }
    return arr; // Return the modified array
}

// Example 2:
// Input: digits = [9,9,9]
// Output: [1,0,0,0]
const example2 = plusOne([9, 9, 9]);
console.log(example2); // Output: [1, 0, 0, 0]
// Example 3:
// Input: digits = [0]
const example3 = plusOne([0]);
console.log(example3); // Output: [1]
// Example 4:
// Input: digits = [1, 0, 0]
const example4 = plusOne([1, 0, 0]);
console.log(example4); // Output: [1, 0, 1]
// Example 5:
// Input: digits = [1, 2, 9]
const example5 = plusOne([1, 2, 9]);
console.log(example5); // Output: [1, 3, 0]