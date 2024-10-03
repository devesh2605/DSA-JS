//Input: [0,3,5,8,9,5,2] and Peak should be -> 9

class Solution {
    peakInMountain(nums) {
        const copy = nums;
        const n = nums.length;

        //idx 0 and n-1 can't be peak (handle edge cases)
        let st = 1;
        let end = n - 2;

        console.log('original array: ',copy);
        console.log('\n\n');

        while (st <= end) {
            let mid = Math.floor(st + (end - st) / 2);

            console.log('start: ', st);
            console.log('end: ', end);
            console.log('middle: ', mid);
            console.log('current array: ', copy.slice(st, end + 1)); //this is only for the simulation

            if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
                console.log(`peak is found as -> ${nums[mid]} > ${nums[mid - 1]}  and ${nums[mid]} > ${nums[mid + 1]}`);
                return mid;
            }

            //search in the 'right search space'
            if (nums[mid] > nums[mid - 1]) {
                console.log(`peak is on right side as -> ${nums[mid]} > ${nums[mid - 1]}`);
                st = mid + 1;
            }
            //search in 'left search space'
            else {
                console.log(`peak is on left side`);
                end = mid - 1;
            }

            console.log('\n-------------------------------------------------\n\n');
        }

        return -1; //search space is over
    }
}

const main = () => {
    const arrs = [
        [0, 3, 5, 8, 9, 5, 2], // Peak is 9
        [1, 2, 3, 4, 5, 3, 1], // Peak is 5
        [0, 2, 4, 6, 5, 3, 1], // Peak is 6
        [1, 3, 5, 7, 6, 4, 2], // Peak is 7
        [0, 1, 0],             // Peak is 1
        [1, 2, 3, 2, 1],       // Peak is 3
        [0, 10, 5, 2],         // Peak is 10
        [3, 4, 5, 1],          // Peak is 5
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] // Peak is 10
    ]

    const solution = new Solution();
    for(arr in arrs){
        console.log(`Peak for array => [${arrs[arr]}] => ${solution.peakInMountain(arrs[arr])}`);
        console.log('**************************************************************************\n\n\n');
    }
}

main();