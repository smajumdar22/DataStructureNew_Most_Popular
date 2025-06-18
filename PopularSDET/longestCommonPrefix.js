const longestCommonPrefix = (strs) => { 
  if (!strs.length) return ''; // Return empty string if input array is empty
  
  let prefix = strs[0]; // Start with the first string as the initial prefix
  
  // Iterate through each string in the array starting from the second
  for (let i = 1; i < strs.length; i++) {
    // While the current prefix is not a prefix of strs[i]
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // Remove the last character from prefix
      if (!prefix) return ''; // If prefix becomes empty, return empty string
    }
  }
  
  return prefix; // Return the longest common
