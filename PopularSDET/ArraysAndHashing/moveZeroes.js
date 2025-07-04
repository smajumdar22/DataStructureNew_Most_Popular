// Given an integer array nums, move 
// all 0's to the end of it while 
// maintaining the relative order of the non-zero elements.
// Note that you must do this in-place
//  without making a copy of the array
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Given an array, move all 0's to the end while maintaining the relative order of the non-zero elements.
function moveZeroes(nums) {
  let lastNonZeroIndex = 0; // Tracks the position to place the next non-zero element
  // First pass: move all non-zero elements to the beginning
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i]; // Overwrite element at lastNonZeroIndex
      lastNonZeroIndex++; // Move pointer forward
    }
  }
  // Second pass: fill remaining positions with zeroes
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}