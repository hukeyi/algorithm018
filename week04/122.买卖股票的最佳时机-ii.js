/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return solution2(prices);
};

// 动态规划
var solution1 = function(prices){
    const len = prices.length;
    let [res, dp0, dp1] = [0, 0, -prices[0]];
    for (let i = 1; i < len; i++){
        let newDp0 = Math.max(dp0, dp1 + prices[i]);
        let newDp1 = Math.max(dp1, dp0 - prices[i]);
        dp0 = newDp0;
        dp1 = newDp1;
    }
    return dp0;
}
// greedy
var solution2 = function(prices){
    let profit = 0;
    const len = prices.length;
    for (let i = 1; i < len; i++){
        if (prices[i] > prices[i - 1])
            profit += prices[i] - prices[i - 1];
    }
    return profit;
}
// @lc code=end