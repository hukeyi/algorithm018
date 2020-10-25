/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 递归 83.44
// var mergeTwoLists = function (l1, l2){
//     if (!l1 || !l2) return l1 ? l1 : l2;

//     if (l1.val < l2.val){
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     }else{
//         l2.next = mergeTwoLists(l2.next, l1);
//         return l2;
//     }
// }

// 迭代
var mergeTwoLists = function(l1, l2){
    if (!l1 || !l2) return l1 ? l1 : l2;

    const dummy = new ListNode();
    let curr = dummy;
    while (l1 && l2){
        if (l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
        }else{
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 ? l1 : l2;
    return dummy.next;
}
// @lc code=end

