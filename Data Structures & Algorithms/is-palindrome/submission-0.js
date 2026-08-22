class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        return str === str.split("").reverse().join('');
    }
}
// 