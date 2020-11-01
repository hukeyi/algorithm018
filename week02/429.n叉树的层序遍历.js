/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

const { RSA_NO_PADDING } = require("constants");

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    return solution1(root);
};

// 队列
var solution1 = function(root){
    let res = [], queue = [];
    if (!root) return res;

    queue.push(root);
    while (queue.length){
        let ans = []; //一整行的结点值
        const len = queue.length;
        for (let i = 0; i < len; i++){ //把一整行循环完
            let curr = queue.shift();
            ans.push(curr.val);
            queue = queue.concat(curr.children);
        }
        if (ans.length) res.push(ans);
    }
    return res;
}
// @lc code=end

