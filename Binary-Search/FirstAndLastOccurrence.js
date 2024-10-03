//Input: x = 3, arr[] = [1, 3, 3, 4] and Output: [1, 2]

class Solution {
    firstAndLast(nums, target) {
        let first = -1;
        let last = -1;

        //if the length of the array is 1
        if (n === 1) {
            return [0, 0];
        }

        console.log('<---- Find first Occurrence ---->');
        first = this.findFirstOccurrence(nums, target);
        console.log('------------------------------');
        console.log('------------------------------\n');

        console.log('<---- Find last Occurrence  ---->');
        last = this.findLastOccurrence(nums, target);
        console.log('------------------------------');
        console.log('------------------------------\n');

        return [first, last];
    }

    findFirstOccurrence(nums, target) {
        const copy = nums;
        const n = nums.length;

        let st = 0;
        let end = n - 1;
        let first = -1;

        while (st <= end) {
            let mid = Math.floor(st + (end - st) / 2);

            console.log('start: ', st);
            console.log('end: ', end);
            console.log('middle: ', mid);
            console.log('current array: ', copy.slice(st, end + 1)); //this is only for the simulation

            if (target === nums[mid]) {
                first = mid;
                // look for smaller index on the left
                end = mid - 1;
            } else if (target > nums[mid]) {
                // look on the right
                st = mid + 1;
            } else {
                // look on the left
                end = mid - 1;
            }

            console.log('-----------------------------------------\n\n');
        }

        console.log('first: ', first);

        return first;
    }

    findLastOccurrence(nums, target) {
        const copy = nums;
        const n = nums.length;

        let st = 0;
        let end = n - 1;
        let last = -1;

        while (st <= end) {
            let mid = Math.floor(st + (end - st) / 2);

            console.log('start: ', st);
            console.log('end: ', end);
            console.log('middle: ', mid);
            console.log('current array: ', copy.slice(st, end + 1)); //this is only for the simulation

            if (target === nums[mid]) {
                last = mid;
                // look for larger index on the right
                st = mid + 1;
            } else if (target > nums[mid]) {
                // look on the right
                st = mid + 1;
            } else {
                // look on the left
                end = mid - 1;
            }

            console.log('-----------------------------------------\n\n');
        }

        console.log('last: ', last);

        return last;
    }
}

const main = () => {
    const arrs = [
        [1, 3, 3, 4],        // Target 3, Output: [1, 2]
        [5, 7, 7, 8, 8, 10], // Target 8, Output: [3, 4]
        [5, 7, 7, 8, 8, 10], // Target 6, Output: [-1, -1]
        [1, 2, 2, 2, 3, 4],  // Target 2, Output: [1, 3]
        [1, 1, 1, 1, 1, 1],  // Target 1, Output: [0, 5]
        [1, 2, 3, 4, 5],     // Target 5, Output: [4, 4]
        [1, 2, 3, 4, 5],     // Target 1, Output: [0, 0]
        [1, 2, 3, 4, 5],     // Target 3, Output: [2, 2]
        [1, 2, 3, 4, 5],     // Target 6, Output: [-1, -1]
        []                   // Target 1, Output: [-1, -1]
    ];
    const targets = [
        3, 8, 6, 2, 1, 5, 1, 3, 6, 1
    ];

    const solution = new Solution();
    for (arr in arrs) {
        console.log(`First and Last Occurrence of element ${targets[arr]} in array [${arrs[arr]}] => ${solution.firstAndLast(arrs[arr], targets[arr])}`);
        console.log('**************************************************************************\n\n\n');
    }
}

main();