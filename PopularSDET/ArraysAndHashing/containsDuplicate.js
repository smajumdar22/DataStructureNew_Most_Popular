const containsDuplicate2 = (nums) => {
    const seen = new Set(); // Create a set to keep track of seen numbers
    for (let i in nums) {   // Iterate through each index in the array
        if (seen.has(nums[i])) { // If the number is already in the set, it's a duplicate
            return true;         // Return true if duplicate found
        }
        seen.add(nums[i]);       // Otherwise, add the number to the set
    }
    return false; // If no duplicates found, return false
}

const containsDuplicate = (nums) => {
    const set = new Set(nums); // Create a set from the array (removes duplicates)
    console.log(set);          // Debug: print the set
    return set.size !== nums.length; // If set size is less, there were duplicates
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log(containsDuplicate([])); // false
console.log(containsDuplicate([1])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5])); // false
console.log(containsDuplicate([1, 2, 3, 1, 2, 3])); // true
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1])); // true