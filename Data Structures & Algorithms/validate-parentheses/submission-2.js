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
        let arr = s.split("");
        for (let item of arr) {
            if (!pairs[item]) {
                stack.push(item);
            } else if (stack[stack.length - 1] === pairs[item]) {
                stack.pop();
            } else {
                stack.push(item);
            }
        }
        return stack.length === 0;
    }
}
