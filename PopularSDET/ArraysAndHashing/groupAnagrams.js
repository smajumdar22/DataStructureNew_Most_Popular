// Given an array of strings strs, group the anagrams together.
//  You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = (strs) => {
    let map = new Map(); // Create a new Map to store groups of anagrams

    for (let str of strs) { // Iterate through each string in the input array
        // Sort the string to create a key
        // For example, "eat" -> "aet", "tea" -> "aet"
        let key = str.split('').sort().join('');
    
        // If the key is not in the map, add it with an empty array
        // This ensures each unique sorted string has its own group
        if (!map.has(key)) {
            map.set(key, []);
        }

        // Push the original string into the array corresponding to the key
        // All anagrams will have the same sorted key and be grouped together
        map.get(key).push(str);
    }

    // Convert the map values (arrays of anagrams) to an array and return it
    // The result is an array of arrays, each containing grouped anagrams
    return Array.from(map.values());
}

// Example usage:
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(strs);
console.log(groupedAnagrams); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

