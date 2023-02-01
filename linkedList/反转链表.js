/**
 * 206. 反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 
示例 1：

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]


 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let p1 = head;
    let p2 = null;
    
    while(p1){
      const tmp = p1.next; 
      p1.next = p2;
      p2 = p1;
      p1 = tmp; 
    }
    return p2
};