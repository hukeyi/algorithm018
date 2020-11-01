/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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

//递归
// var inorderTraversal = function(root) {
//     if (!root) return [];

//     let res = [];
//     let inorder = (root) => {
//         if (!root) return;
//         inorder(root.left);
//         res.push(root.val);
//         inorder(root.right);
//     }
//     inorder(root);
//     return res;
// };

// // 迭代
// var inorderTraversal = function(root){
//     if (!root) return [];

//     let stack = [], res = [];
//     let r = root;
//     while (r || stack.length !== 0){
//         while (r){
//             stack.push(r);
//             r = r.left;
//         }
//         if (stack.length !== 0){
//             r = stack.pop();
//             res.push(r.val);
//             r = r.right;
//         }
//     }
//     return res;
// }

// 颜色标记法
var inorderTraversal = function(root){
    const [WHITE, GRAY] = [0, 1];
    let res = [], stack = [];
    stack.push([WHITE, root]);
    
    let node, color;
    while (stack.length){
        [color, node] = stack.pop();
        if (!node) continue;
        if (color === WHITE){
            stack.push([WHITE, node.right]);
            stack.push([GRAY, node]);
            stack.push([WHITE, node.left]);
        }else{
            res.push(node.val);
        }
    }
    return res;
}
// @lc code=end

