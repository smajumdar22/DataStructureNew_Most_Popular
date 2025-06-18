const convertToColumn = (number) => {
  if (number < 1) {
    throw new Error("Number must be greater than 0"); // Excel columns start from 1
  }

  let column = '';
  while (number > 0) {
    const remainder = (number - 1) % 26; // Find the remainder for the current "digit" (0-based)
    column = String.fromCharCode(65 + remainder) + column; // Convert remainder to letter and prepend to result
    number = Math.floor((number - 1) / 26); // Move to the next "digit" in base-26
  }
  
  return column; // Return the final Excel column string
}
