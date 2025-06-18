const mergeSortedArrays = (arr1,m, arr2,n) => {
let i = m - 1; // Pointer for the end of arr1 (last valid element)
let j = n - 1; // Pointer for the end of arr2
let k = m + n - 1; // Pointer for the end of the merged array (arr1 has enough space for all elements)

// Merge in reverse order (from the end to the beginning)
while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
        arr1[k] = arr1[i]; // Place the larger value at the end of arr1
        i--;               // Move pointer i to the left
    } else {
        arr1[k] = arr2[j]; // Place the larger value from arr2 at the end of arr1
        j--;               // Move pointer j to the left
    }
    k--; // Move the merged array pointer to the left
}

// If there are remaining elements in arr2, copy them
while (j >= 0) {
    arr1[k] = arr2[j]; // Copy remaining elements from arr2 to arr1
    j--;
    k--;
}

return arr1;
}