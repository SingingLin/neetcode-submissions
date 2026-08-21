class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);

        let longest = 0;
        for (let num of numsSet) {
            // 找起點 -> 如果找不到自己的前一個人 那自己就是起點
            if (!numsSet.has(num - 1)) {
                let length = 1;
                while (numsSet.has(num + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
