// Given an array nums containing n distinct 
// numbers in the range [0, n], return 
// the only number in the range that is missing from the array.
// Example 1:// Input: nums = [3,0,1]// Output: 2
const missingNumber = (nums) => {
const n = nums.length;
let total = 0; // Will hold the sum of all numbers from 0 to n
let sum = 0;   // Will hold the sum of all elements in the input array

// Calculate the sum of first n natural numbers (from 0 to n) using a loop
for (let i = 0; i <= n; i++) {
  total += i;
}
console.log(total); // Debugging line to check the total sum
// Calculate the sum of all elements in the array using a loop
for (let i = 0; i < n; i++) {
  sum += nums[i];
}
console.log(sum); // Debugging line to check the sum of array elements
// The missing number is the difference between the expected total and the actual sum
return total - sum;
}
console.log(missingNumber([3, 0, 1])); // Output: 2