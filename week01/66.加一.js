/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits){
    //return mySolution(digits);
    return goodSolution1(digits);
};

var goodSolution1 = function (digits){
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--){
        if (digits[i] < 9){
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

// my solution
var mySolution = function(digits) {
    let len = digits.length; //当前数字位数
    let pos = len - 1;
    for (; pos >= 0; pos--){
        if (digits[pos] < 9){
            digits[pos]++;
            return digits;
        }
        if (pos === 0){
            digits[pos] = 0;
            digits.unshift(1);
            return digits;
        }
        digits[pos] = 0;
    }
};
// @lc code=end

