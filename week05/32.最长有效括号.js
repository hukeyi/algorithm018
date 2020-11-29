/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLen = 0;
    const len = s.length, dp = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
      if (s[i] === ')') {
        if (s[i - 1] === '(') {
          if (i - 2 >= 0) {
            dp[i] = dp[i - 2] + 2;
          } else {
            dp[i] = 2;
          }
        } else if (s[i - dp[i - 1] - 1] === '(') {
          if (i - dp[i - 1] - 2 >= 0) {
            dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
          } else {
            dp[i] = dp[i - 1] + 2;
          }
        }
      }
      maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
};
// @lc code=end

