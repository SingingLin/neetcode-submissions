class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = new Map();

        for (let num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        let bucket = Array.from({ length: nums.length + 1 }, () => []);
        for (let [key, val] of countMap.entries()) {
            bucket[val].push(key);
        }

        let result = [];
        for (let i = bucket.length - 1; i > 0; i--) {
            if (bucket[i].length > 0) {
                for (let v of bucket[i]) result.push(v);
            }
        }

        return result.slice(0, k);
    }
}
