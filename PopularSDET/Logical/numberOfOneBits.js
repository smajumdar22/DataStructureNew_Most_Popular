// Given a positive integer n, write a function that 
// returns the number of set bits in its binary representation (also known as the Hamming weight).

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.
const hammingWeight = (n) => {
    let count = 0; // Initialize a counter for the number of 1 bits
    while (n > 0) { // Loop until n becomes 0
        count += n & 1; // Add the least significant bit of n to count
        n >>= 1; // Right shift n by 1 to process the next bit
    }
    return count; // Return the total count of 1 bits
}