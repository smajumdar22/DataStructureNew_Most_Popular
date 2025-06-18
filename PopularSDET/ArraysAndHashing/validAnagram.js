const validAnagram = (s, t) => {
    // Create sets of unique characters for both strings
    let sSet = new Set(s);
    let tSet = new Set(t);

    console.log(sSet);
    console.log(tSet);

    // If the sets have different sizes, the strings can't be anagrams
    if (sSet.size !== tSet.size) {
        return false;
    }
    // For each unique character in s
    for (let char of sSet) {
        // Compare the number of occurrences of the character in both strings
        // If they differ, the strings are not anagrams
        //console.log(char);
        //console.log(s.split(char), t.split(char));
        // Splitting a string by a character results in an array 
        // whose length is one more than the number of times 
        // that character appears. Subtracting 1 gives the exact 
        // count of that character in the string.
        if (s.split(char).length - 1 !== t.split(char).length - 1) {
            return false;
        }
    }
    // If all character counts match, the strings are anagrams
    return true;
}

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
// r
// [ '', 'at' ] [ 'ca', '' ]
// a
// [ 'r', 't' ] [ 'c', 'r' ]
// t
// [ 'ra', '' ] [ 'car' ]
 console.log(validAnagram("listen", "silent")); // true
 console.log(validAnagram("hello", "world")); // false
 console.log(validAnagram("aabbcc", "abcabc")); // true
 console.log(validAnagram("abc", "cba")); // true
//  a
// [ '', 'bc' ] [ 'cb', '' ]
// b
// [ 'a', 'c' ] [ 'c', 'a' ]
// c
// [ 'ab', '' ] [ '', 'ba' ]

