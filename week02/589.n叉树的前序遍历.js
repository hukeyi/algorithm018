/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    return solution2(root);
};

// 递归
var solution1 = function(root){
    if (!root) return [];
    let res = [];

    const pre = (root) => {
        if (!root) return [];
        res.push(root.val);
        let children = root.children;
        const len = children.length;
        for (let i = 0; i < len; i++){
            pre(children[i]);
        }
    }
    pre(root);
    return res;
}

// 迭代：BFS
var solution2 = function(root){
    let res = [], s = [];
    if (!root) return res;
    s.push(root);

    while (s.length){
        let curr = s.pop(); //栈顶出栈
        res.push(curr.val);
        const len = curr.children.length;
        for (let i = len - 1; i >= 0; i--){ //注意：需要从后往前压入栈
            s.push(curr.children[i]);
        }
    }
    return res;
}
// @lc code=end

