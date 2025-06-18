const longestSubstringWithoutRepeatingCharacters = (s) => {
  const charIndexMap = new Map(); // Map to store the last index of each character
  let maxLength = 0;              // Variable to keep track of the maximum length found
  let start = 0;                  // Start index of the current window (substring without repeats)

  // Iterate through the string with 'end' as the end index of the window
  for (let end = 0; end < s.length; end++) {
    if (charIndexMap.has(s[end])) {
      // If the character is already in the map and its index is within the current window,
      // move the start to the right of the previous occurrence of the current character
      start = Math.max(charIndexMap.get(s[end]) + 1, start);
    }
    // Update the last seen index of the current character
    charIndexMap.set(s[end], end);
    // Update the maximum length if the current window is larger
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength; // Return the length of the longest substring without repeating characters
