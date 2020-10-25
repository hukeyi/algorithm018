/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // return mySolution(nums);
    return goodSolution(nums);
};

// 空间复杂度不符合题目要求
var mySolution = function(nums){
    let map = [];
    for (let i = 0; i < nums.length; i++){
        if (map.indexOf(nums[i]) === -1){
            map.push(nums[i]);
        }else{
            nums.splice(i--, 1);
        }
    }
    return nums.length;
}

var goodSolution = function(nums){
    let slow = 0, fast = 1;
    const len = nums.length;
    while (fast < len){
        if (nums[slow] !== nums[fast]){
            nums[++slow] = nums[fast];
        }
        fast++;
    }
    return slow + 1;
}
// @lc code=end

