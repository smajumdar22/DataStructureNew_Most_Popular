const strStr = function (haystack, needle) {
  if (needle === "") return 0; // If needle is empty, return 0
  if (haystack.length < needle.length) return -1; // If haystack is shorter than needle, return -1

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i; // Return the index where needle is found
    }
  }
  
  return -1; // If needle is not found, return -1
}
