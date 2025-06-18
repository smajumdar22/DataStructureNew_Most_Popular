const palindrome = (str) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Check if the cleaned string is a palindrome using a loop
    for (let i = 0, j = cleanedStr.length - 1; i < j; i++, j--) {
        if (cleanedStr[i] !== cleanedStr[j]) {
            return false;
        }
    }
    return
