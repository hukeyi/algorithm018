/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(!nums) return false;
    const len = nums.length;
    let endIndex = nums[len - 1];
    for (let i = len - 1; i >= 0; i--){
        // 从后往前，看当前位置i是否能够跳到endIndex的位置
        if (nums[i] >= endIndex - i){
            endIndex = i;
        }
    }
    return endIndex === 0;
};
// @lc code=end

