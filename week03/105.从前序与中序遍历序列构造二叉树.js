/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 1. find the root via preorder[0]
// 2. split the left and right through preorder[0]
// 3. drill down
// 4. until there's only one element in the arr or none
var buildTree = function(preorder, inorder) {
    if (preorder.length == 0) return null;

    let root = new TreeNode(preorder[0]);
    if (preorder.length == 1) return root;

    let rIndex = inorder.indexOf(root.val);
    let vinleft = inorder.slice(0, rIndex);
    let vinright = (rIndex + 1 < inorder.length) ? inorder.slice(rIndex + 1) : [];
    let preleft = preorder.slice(1, rIndex + 1);
    let preright = (rIndex + 1 < preorder.length) ? preorder.slice(rIndex + 1) : [];

    root.left = buildTree(preleft, vinleft);
    root.right = buildTree(preright, vinright);
    return root;
};
// @lc code=end

