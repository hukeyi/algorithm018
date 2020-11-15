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
    const dfs = function(grid, i, j){
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i, j + 1);
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

// dfs
var solution1 = function(grid){
    let count = 0;
    const dfs = function(grid, i, j){
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i - 1, j);
        dfs(grid, i, j - 1);
    }

    for (let k = 0; k < grid.length; k++){
        for (let t = 0; t < grid[0].length; t++){
            if (grid[k][t] === '1'){
                dfs(grid, k, t);
                count++;
            }
        }
    }
    return count;
}
// @lc code=end

