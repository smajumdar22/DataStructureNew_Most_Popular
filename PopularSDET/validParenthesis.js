const isValid = (s) => {
  const stack = []; // Stack to keep track of expected closing brackets
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  // Iterate through each character in the string
  for (let char of s) {
    if (map[char]) {
      // If it's an opening bracket, push its corresponding closing bracket onto the stack
      stack.push(map[char]);
    } else if (stack.length === 0 || stack.pop() !== char) {
      // If it's a closing bracket, check if it matches the top of the stack
      // If stack is empty or brackets don't match, return false
      return false;
    }
  }

  // If stack is empty, all brackets were matched correctly
  return stack.length === 0;
}
