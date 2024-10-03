//Input : [-1,0,3,4,5,9,12]; Target: 12, Output: 6(Index)

class Solution {
    binarySearch(nums, target) {
        const copy = nums;

        const n = nums.length;
        let start = 0;
        let end = n - 1;

        while (start <= end) {
            let mid = start + (end - start) / 2; //calculate the mid of the array

            console.log('start: ', start);
            console.log('end: ',end);
            console.log('middle: ',mid);
            console.log('current array: ',copy.slice(start, end+1)); //this is only for the simulation

            if (target > nums[mid]) { //2nd half
                start = mid + 1;
            } else if (target < nums[mid]) { //1st half
                end = mid - 1;
            } else {
                return mid; //target is equal to mid
            }

            console.log('----------------------------------------\n');
        }

        return -1; //Search space is over and no elements found
    }
}

const main = () => {
    const arrs = [
        [-1, 0, 3, 4, 5, 9, 12]
    ]
    const target = [12];

    const solution = new Solution();
    console.log(`Iterative solution for array => [${arrs[0]}] and target => ${target[0]} => ${solution.binarySearch(arrs[0], target[0])}`)
}