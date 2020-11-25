
/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const len1 = text1.length, len2 = text2.length;
    const dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0));
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            const cha1 = text1[i], cha2 = text2[j];
            if (cha1 === cha2) {
                dp[i + 1][j + 1] = dp[i][j] + 1;
            } else {
                dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }
    return dp[len1][len2];
};
// @lc code=end

