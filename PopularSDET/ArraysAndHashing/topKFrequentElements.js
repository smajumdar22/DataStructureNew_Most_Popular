// Given an integer array nums and an integer k, return 
// the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
const topKFrequent = (nums, k) => {
    // Count the frequency of each number
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    // console.log(map); // Debugging line to see the frequency map
    // Collect all [key, value] pairs into an array
    let entries = Array.from(map.entries());
    console.log(entries); // Debugging line to see the frequency map
    // Sort the entries by frequency in descending order
    entries.sort((a, b) => b[1] - a[1]);
    console.log(entries); // Debugging line to see the sorted entries

    // Take the top k keys
    return entries.slice(0, k).map(entry => entry[0]);
}

// Example usage
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k)); // Output: [1, 2]