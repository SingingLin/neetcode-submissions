class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCount = 0;
        let totalProduct = 1;

        for (let num of nums) {
            if (num === 0) {
                zeroCount++;
            } else {
                totalProduct *= num;
            }
        }

        if (zeroCount > 1) {
            return Array(nums.length).fill(0);
        }

        let res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount === 1) {
                res[i] = nums[i] === 0 ? totalProduct : 0;
            } else {
                res[i] = totalProduct / nums[i];
            }
        }
        return res;
    }
}
