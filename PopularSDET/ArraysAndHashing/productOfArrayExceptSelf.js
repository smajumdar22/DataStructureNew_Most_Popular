// Given an integer array nums, return an array answer 
// such that answer[i] is equal to the product of 
// all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is 
// guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) 
// time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]// Output: [24,12,8,6]
// Example 2:// Input: nums = [-1,1,0,-3,3]// Output: [0,0,9,0,0]

const productExceptSelfBruteForce = (nums) => {
    const n = nums.length;
    const answer = new Array(n).fill(1); // Initialize result array with 1s
    
    for(let i=0; i< n; i++){
        for(let j=0; j<n; j++){
            if(i !== j) { // Skip the current index
                answer[i] *= nums[j]; // Multiply all other elements
            }
        }
    }
    return answer;
}
const productExceptSelf = (nums) => {
    const num = nums.length;
    const answer = new Array(num).fill(1); // Initialize result array with 1s
    // First pass: calculate the product of all elements to the left of each index
    let leftProduct = 1;
    for (let i = 0; i < num; i++) {
        answer[i] = leftProduct;      // Set answer[i] to the product of all elements to the left
        leftProduct *= nums[i];       // Update leftProduct to include nums[i] for the next index
    }
    // Second pass: calculate the product of all elements to the right and multiply with left products
    let rightProduct = 1;
    for (let i = num - 1; i >= 0; i--) {
        answer[i] *= rightProduct;    // Multiply current answer by the product of all elements to the right
        rightProduct *= nums[i];      // Update rightProduct to include nums[i] for the next index to the left
    }
    return answer; // Return the final array where each element is the product of all other elements except itself
}


// Example usage:
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result); // Output: [24, 12, 8, 6]