/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    return mysolution2 (matrix, target);
};

// start from the right corner
var mysolution1 = function(matrix, target){
    if (!matrix.length) return false;
    const row = matrix.length, col = matrix[0].length;
    for (let i = 0; i < row; i++){
        for (let j = col - 1; j >= 0; j--){
            const tmp = matrix[i][j];
            if (tmp === target) return true;
            else if (tmp < target) break;
            else continue;
        }
    }
    return false;
}

// binary search
// see the whole matrix as a 1d array, then apply a binary search on it
// the key points are 1) project the 2d cordinate to the 1d index
var mysolution2 = function(matrix, target){
    if (!matrix.length) return false;

    const row = matrix.length, col = matrix[0].length, len = row * col;
    let left = 0, right = len - 1;
    while (left <= right){
        const mid = left + Math.floor((right - left) / 2)
        const i = Math.floor(mid / col), j = mid % col;
        if (matrix[i][j] === target) return true;
        else if (matrix[i][j] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}
// @lc code=end

