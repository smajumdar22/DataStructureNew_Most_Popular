const hammingDistance = (str1, str2) => {
  // Check if the strings are of the same length
  if (str1.length !== str2.length) {
    throw new Error("Strings must be of the same length");
  }

  let distance = 0; // Initialize the distance counter

  // Loop through each character in the strings
  for (let i = 0; i < str1.length; i++) {
    // If the characters at the same position are different, increment the counter
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }
  return distance; // Return the total number of differing positions
}

// Example usage:
console.log(hammingDistance("karolin", "kathrin")); // Output: 3
console.log(hammingDistance("1011101", "1001001")); // Output: 2

const hammingDistanceNumber = (x, y) => {
  // XOR the two numbers. Bits that are different will be set to 1.
  let xor = x ^ y;
  let distance = 0;

  // Count the number of 1s in the binary representation of xor
  while (xor !== 0) {
    distance += xor & 1; // Increment if the last bit is 1
    xor = xor >>> 1;     // Unsigned right shift to check the next bit
  }

  return distance;
}

// Example usage:
console.log(hammingDistanceNumber(1, 4)); // Output: 2 (1: 001, 4: 100)
console.log(hammingDistanceNumber(3, 1)); // Output: 1 (3: 011, 1: 001)