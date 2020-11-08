/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let ans = [];
    for (let num of nums){
        ans.push(num);
    }
    const backtrack = function (n, ans, res, first){
        if (first === n){
            res.push(ans.slice());
        }
        for (let i = first; i < n; i++){
            [ans[first], ans[i]] = [ans[i], ans[first]];
            backtrack(n, ans, res, first + 1);
            [ans[first], ans[i]] = [ans[i], ans[first]];
        }
    }

    const len = nums.length;
    backtrack(len, ans, res, 0);
    return res;
};
// @lc code=end

