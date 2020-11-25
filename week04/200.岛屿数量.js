/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    return mysolution1(grid);
};

var mysolution1 = function(grid){
    let count = 0;
    const dfs = function (grid, i, j){
        if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] === '0'){
            return;
        }
        grid[i][j] = '0';
        dfs(grid, i, j + 1);
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j - 1);
    }
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === '1'){
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count;
}
// @lc code=end

