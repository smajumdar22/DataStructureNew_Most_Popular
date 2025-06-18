const twoSum = (nums, target) => {
  const obj = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in obj) {
        return [obj[complement], i];
        }
        obj[nums[i]] = i;
    }
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 8)); // [2, 4]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // undefined
console.log(twoSum([1, 2, 3, 4, 5], 0)); // undefined