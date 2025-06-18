const powerOfThree = (n) => {
    if (n < 1) return false; // If n is less than 1, it can't be a power of 3
    while (n % 3 === 0) {    // While n is divisible by 3
        n /= 3;              // Divide n by 3
    }
    return n === 1;          // If n is reduced to 1, it was a power of 3; otherwise, it's not
}