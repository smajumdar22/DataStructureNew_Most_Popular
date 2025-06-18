// Given two integer arrays nums1 and nums2, return 
// an array of their intersection. 
// Each element in the result must appear 
// as many times as it shows in both arrays 
// and you may return the result in any order.


// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

const intersect = (nums1, nums2) => {
    // Create a map to count the frequency of each number in nums1
    let map = new Map();
    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Create an array to hold the intersection result
    let result = [];

    // Iterate through nums2 and check if the number exists in the map
    for (let num of nums2) {
        if (map.has(num) && map.get(num) > 0) {
            result.push(num); // Add to result
            map.set(num, map.get(num) - 1); // Decrease the count in the map
        }
    }

    return result; // Return the intersection result
}

// Example usage
const nums1 = [1, 2, 2, 1]; 
const nums2 = [2, 2];
console.log(intersect(nums1, nums2)); // Output: [2, 2]
// Another example
// const nums3 = [4, 9, 5];
// const nums4 = [9, 4, 9, 8, 4];
// console.log(intersect(nums3, nums4)); // Output: [4, 9] or [9, 4] depending on the order