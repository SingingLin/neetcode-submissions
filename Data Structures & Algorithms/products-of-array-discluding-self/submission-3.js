class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];
        let totalProduct = 1;
        let zeroPos = -1;
        let zeroCount = 0;
        for (let key in nums) {
            if (!nums[key]) {
                zeroPos = key;
                zeroCount++;
            }
            totalProduct *= nums[key] || 1;
        }

        console.log("zeroPos: ", zeroPos);
        console.log("zeroCount: ", zeroCount);
        console.log("totalProduct: ", totalProduct);

        for (let key in nums) {
            if (zeroCount > 1) {
                output.push(0);
            } else {
                if (zeroPos > -1) {
                    if (key === zeroPos) {
                        output.push(totalProduct);
                    } else {
                        output.push(0);
                    }
                } else {
                    output.push(totalProduct / nums[key]);
                }
            }
        }
        console.log("output: ", output);
        return output;
    }
}
