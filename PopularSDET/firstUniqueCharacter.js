const firstUniqueCharacter = (s) => {
  const charCount = {};

  // Count occurrences of each character
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first unique character
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i; // Return the index of the first unique character
    }
  }

  return -1; // Return -1 if no unique character is found
}
