const reverseInteger = (x) => {
    let rev = 0; // Variable to store the reversed number
    let num = Math.abs(x); // Work with the absolute value for reversal

    // Loop until all digits are processed
    while (num > 0) {
        rev = rev * 10 + (num % 10); // Add the last digit of num to rev
        num = Math.floor(num / 10);  // Remove the last digit from num
    }

    // Restore the sign if the original number was negative
    rev = x < 0 ? -rev : rev;

    // Handle 32-bit signed integer overflow
    if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) return 0;

    return rev; // Return the reversed integer
}

// Example usage:
// console.log(reverseInteger(123));    // 321
// console.log(reverseInteger(-456));   // -654
// console.log(reverseInteger(1200));   // 21