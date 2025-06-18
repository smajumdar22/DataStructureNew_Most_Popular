const reversedWordsInBuilt = (str) => {
    // Split the string into words using space as a delimiter
    const words = str.split(' ');

    // Reverse the order of the words
    const reversedWords = words.reverse();

    // Join the reversed words back into a single string with spaces
    return reversedWords.join(' ');
}

const reversedWords = (str) => {
    // Split the string into words using space as a delimiter
    const words = str.split(' ');

    // Reverse the order of the words using a loop
    let reversed = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }

    // Join the reversed words back into a single string with spaces
    return
