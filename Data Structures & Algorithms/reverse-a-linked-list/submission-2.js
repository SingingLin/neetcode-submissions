/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr !== null) {
            const next = curr.next; // 先暫存下一個節點
            curr.next = prev; // 反轉指標方向
            prev = curr; // prev 往前推進
            curr = next; // curr 往前推進
        }

        return prev; // prev 就是反轉後的新頭節點
    }
}
