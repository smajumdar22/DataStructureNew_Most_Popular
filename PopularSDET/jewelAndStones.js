const jewelAndStones = (jewels, stones) => {
  // Create a set to store the jewels for O(1) lookup
  const jewelSet = new Set(jewels);
  
  // Initialize a counter for the number of jewels in stones
  let count = 0;
  
  // Iterate through each stone and check if it's a jewel
  for (const stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }
  
  return count;
}
