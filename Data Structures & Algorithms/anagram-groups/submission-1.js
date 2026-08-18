class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strsMap = new Map();

        for (let str of strs) {
            const sortStr = str.split("").sort().join("");

            if (!strsMap.has(sortStr)) {
                strsMap.set(sortStr, []);
            }

            strsMap.get(sortStr).push(str);
        }

        return [...strsMap.values()];
    }
}
