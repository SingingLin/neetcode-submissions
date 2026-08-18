class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strsMap = new Map();

        for (let str of strs) {
            if (strsMap.has([...str].sort().join(""))) {
                strsMap.get([...str].sort().join("")).push(str);
            } else {
                strsMap.set([...str].sort().join(""), [str]);
            }
        }

        return [...strsMap.values()];
    }
}
