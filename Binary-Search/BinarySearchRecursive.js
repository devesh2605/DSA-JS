//Input : [-1,0,3,4,5,9,12]; Target: 12, Output: 6(Index)

function recursiveBinarySearch(arr, target, start, end) {
    if (start <= end) {
        let mid = start + (end - start) / 2;

        if (target > arr[mid]) {
            return recursiveBinarySearch(arr, target, mid + 1, end);
        } else if (target < arr[mid]) {
            return recursiveBinarySearch(arr, target, start, mid - 1);
        } else {
            return mid;
        }
    }

    return -1;
}

const arr = [-1, 0, 3, 4, 5, 9, 12];
const target = 12;
const n = arr.length;

let start = 0;
let end = n - 1;

console.log(`Recursive solution for array => [${arr}] and target => ${target} => ${recursiveBinarySearch(arr, target, start, end)}`);