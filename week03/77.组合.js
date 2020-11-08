/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    const dfs = (curr, n, k, temp) => {
        const len = temp.length;
        if (len + (n - curr + 1) < k) {
            return;
        }
        if (len == k) {
            ans.push(temp);
            return;
        }
        // 选择
        dfs(curr + 1, n, k, [...temp, curr]);
        // 不选择
        dfs(curr + 1, n, k, temp);
    }
    dfs(1, n, k, []);
    return ans;
};
// @lc code=end

