class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let pairs = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        for (let item of s) {
            if (pairs[item]) {
                if (stack[stack.length - 1] === pairs[item]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(item);
            }
        }
        return stack.length === 0;
    }
}
