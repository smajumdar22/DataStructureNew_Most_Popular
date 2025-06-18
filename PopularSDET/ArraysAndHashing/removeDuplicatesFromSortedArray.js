const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0; // If the array is empty, return 0

    let uniqueIndex = 0; // Pointer for the position of the last unique element

    for (let i = 1; i < nums.length; i++) { // Start from the second element
        if (nums[i] !== nums[uniqueIndex]) { // If current element is different from the last unique element
            uniqueIndex++; // Move to the next position for a unique element
            nums[uniqueIndex] = nums[i]; // Update the array with the new unique element
        }
    }

    return uniqueIndex + 1; // Return the count of unique elements
}

