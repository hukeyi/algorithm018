/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    return solution2(grid);
};
// 动态规划
var solution2 = function(grid){
    const row = grid.length, col = grid[0].length;
    if (!grid || row === 0 || col === 0) return 0;
    const dp = Array.from(new Array(row), () => new Array(col).fill(0));
    dp[0][0] = grid[0][0];
    for (let i = 1; i < row; i++){
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (let j = 1; j < col; j++){
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    for (let i = 1; i < row; i++){
        for (let j = 1; j < col; j++){
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[row - 1][col - 1];
}
// dfs runtime error
var solution1 = function(grid){
    const row = grid.length, col = grid[0].length;
    const res = [];
    const dfs = function(grid, i, j, ans, res){
        if (i === row - 1 && j === col - 1){
            res.push(ans + grid[i][j]);
            return;
        }
        // current logic and drill down
        // right
        if (j < col - 1) dfs(grid, i, j + 1, ans + grid[i][j], res);
        // down
        if (i < row - 1) dfs(grid, i + 1, j, ans + grid[i][j], res);
    }
    dfs(grid, 0, 0, 0, res);
    return Math.min(...res);
}
// @lc code=end

