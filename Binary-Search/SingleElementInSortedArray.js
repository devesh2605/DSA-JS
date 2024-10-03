//Input : [1,1,2,3,3,4,4,8,8] and Output: 2

class Solution {
    singleElement(nums) {
        const copy = nums;
        const n = nums.length; //length of the array

        let st = 0;
        let end = n - 1;

        //length of the array is 1
        if (n === 1) {
            return nums[0];
        }

        while (st <= end) {
            let mid = Math.floor(st + (end - st) / 2);

            console.log('start: ', st);
            console.log('end: ', end);
            console.log('middle: ', mid);
            console.log('current array: ', copy.slice(st, end + 1)); //this is only for the simulation

            if (mid === 0 && nums[0] !== nums[1]) {
                console.log(`mid is at index 0`);
                return nums[mid];
            }

            if (mid === n - 1 && nums[n - 1] !== nums[n - 2]) {
                console.log(`mid is at index n-1`);
                return nums[mid];
            }

            if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
                return nums[mid];
            }

            //Left and Right Half Size is 'even'
            if (mid % 2 === 0) {
                console.log('Even sized array on both sides');
                //Search in left half
                if (nums[mid - 1] === nums[mid]) {
                    console.log(`Searching in left half as -> ${nums[mid - 1]} === ${nums[mid]}`);
                    end = mid - 1;
                }
                //Search in right half
                else {
                    console.log(`Searching in right half as -> ${nums[mid + 1]} === ${nums[mid]}`);
                    st = mid + 1;
                }
            }

            //Left and Right Half Size is 'odd'
            if (mid % 2 !== 0) {
                console.log('Odd sized array on both sides');
                if (nums[mid - 1] === nums[mid]) {
                    console.log(`Searching in right half as -> ${nums[mid - 1]} === ${nums[mid]}`);
                    st = mid + 1;
                } else {
                    console.log(`Searching in left half as -> ${nums[mid + 1]} === ${nums[mid]}`);
                    end = mid - 1;
                }
            }

            console.log('---------------------------------------------\n\n');
        }

        return -1;
    }
}

const main = () => {
    const arrs = [
        [1, 1, 2, 3, 3, 4, 4, 8, 8], // Single element is 2
        [3, 3, 7, 7, 10, 11, 11],    // Single element is 10
        [1, 1, 2, 2, 3, 3, 4, 4, 5], // Single element is 5
        [0, 1, 1, 2, 2, 5, 5],       // Single element is 0
        [1, 1, 2],                   // Single element is 2
        [2, 3, 3, 4, 4, 5, 5],       // Single element is 2
        [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6], // Single element is 6
        [1, 2, 2, 3, 3, 4, 4],       // Single element is 1
        [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7], // Single element is 7
        [1]                          // Single element is 1
    ]

    const solution = new Solution();
    for (arr in arrs) {
        console.log(`Single Element for array => [${arrs[arr]}] => ${solution.singleElement(arrs[arr])}`);
        console.log('**************************************************************************\n\n\n');
    }
}

main();