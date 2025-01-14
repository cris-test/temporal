/* Implements binary search */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } else if (arr[mid] < target) {
            left = mid + 1; // Move to the right half
        } else {
            right = mid - 1; // Move to the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Target found at index: ${result}`);
} else {
    console.log("Target not found in the array.");
}
