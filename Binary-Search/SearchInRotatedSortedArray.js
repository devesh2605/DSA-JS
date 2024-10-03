//Input: [3,4,5,6,7,0,1,2] and Target: 0

class Solution {
    searchInRotatedArray(nums, target) {
        const copy = nums;
        const n = nums.length; //length of the array
        let st = 0;
        let end = n - 1;

        while (st <= end) {
            let mid = Math.floor(st + (end - st) / 2); //calculate the mid of the array

            console.log('start: ', st);
            console.log('end: ', end);
            console.log('middle: ', mid);
            console.log('current array: ', copy.slice(st, end + 1)); //this is only for the simulation

            if (target === nums[mid]) {
                console.log(`element found at index: ${mid}`);
                return mid;
            }

            //check if 'left search space' is sorted
            if (nums[st] <= nums[mid]) {
                console.log('left search space is sorted');
                //check if element exist in 'left search space'
                if (target >= nums[st] && target <= nums[mid]) {
                    console.log('Element exist in left');
                    end = mid - 1; //element exist in 'left search space'
                } else {
                    console.log('Element exist in right');
                    st = mid + 1; //element exist in 'right search space'
                }
            }
            //check if 'right space search' is sorted
            else if (nums[mid] <= nums[end]) {
                console.log('right search space is sorted');
                //check if element exist in 'right search space'
                if (target >= nums[mid] && target <= nums[end]) {
                    console.log('Element exist in right');
                    st = mid + 1; //element exist in 'right search space'
                } else {
                    console.log('Element exist in left');
                    end = mid - 1; //element exist in 'left search space'
                }
            }

            console.log('-----------------------------------------------\n');
        }

        return -1; //Search space is over and no elements found
    }
}

const main = () => {
    const arrs = [
        [3, 4, 5, 6, 7, 0, 1, 2]
    ]
    const target = [0];

    const solution = new Solution();
    console.log(`Solution for array => [${arrs[0]}] and target => ${target[0]} => ${solution.searchInRotatedArray(arrs[0], target[0])}`)
}

main();