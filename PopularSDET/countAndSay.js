const countAndSay = (n) => {
  if (n === 1) return "1"; // Base case: the first term is always "1"
  
  let prev = countAndSay(n - 1); // Recursively get the previous term in the sequence
  let result = "";               // Initialize the result string for this term
  let count = 1;                 // Counter for consecutive digits

  // Loop through the previous term to build the current term
  for (let i = 0; i < prev.length; i++) {
    if (prev[i] === prev[i + 1]) {
      count++; // If the current digit is the same as the next, increment the count
    } else {
      result += count + prev[i]; // Otherwise, append the count and the digit to the result
      count = 1;                 // Reset the count for the next group of digits
    }
  }

  return result; // Return
