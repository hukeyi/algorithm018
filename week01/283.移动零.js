/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    return solution3(nums);
};

// 99.39
var solution1 = function(nums){
    const len = nums.length;
    let j = 0;
    for (let i = 0; i < len; i++){
        if (nums[i] !== 0){
            nums[j] = nums[i];
            if (i !== j){
                nums[i] = 0;
            }
            j++;
        }
    }
    return nums;
}

var solution2 = function(nums){
    const len = nums.length;
    let j = 0;
    for (let i = 0; i < len; i++){
        if (nums[i] !== 0){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
    return nums;
}

var solution3 = function(nums){
    const len = nums.length;
    let j = 0;
    for (let i = 0; i < len; i++){
        if (nums[j] === 0){
            nums.splice(j, 1);
            nums[len - 1] = 0;
        }else{
            j++;
        }
    }
    return nums;
}

// 93.21 15.55
var mySolution = function (nums) {
    const len = nums.length;
    let countZero = 0;
    nums.forEach( num => {
        if (num === 0) countZero++;
    });
    const countNotZero = len - countZero;
    let pos = 0;
    for (let i = 0; i < len; i++){
        if (nums[i] !== 0){
            nums[pos++] = nums[i];
        }
        if (pos >= countNotZero){
            while(pos < len){
                nums[pos++] = 0;
            }
            break;
        }
    }
    return nums;
}
// @lc code=end

