/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var preorderTraversal = function(root) {
    return solution2(root);
};

var solution1 = function(root){
    let res = [];
    const preorder = (root) => {
        if (!root) return;

        res.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return res;
}

// 基于栈的迭代
var solution2 = function (root){
    if (!root) return [];
    let s = [], res = [];
    let r = root;

    while (r || s.length){
        while (r){
            s.push(r);
            res.push(r.val);
            r = r.left;
        }
        if (s.length){
            r = s.pop();
            r = r.right;
        }
    }
    return res;
}
// @lc code=end

