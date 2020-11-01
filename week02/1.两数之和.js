/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// my solution
var twoSum = function(nums, target) {
    return mysolution2(nums, target);
};

// 1. 暴力，2 loop
// 2. hash 每个数都记录在哈希中，key为值，value为下标
var mysolution1 = function(nums, target){
    const len = nums.length;
    for (let i = 0; i < len - 1; i++){
        const other = target - nums[i];
        for (let j = i + 1; j < len; j++){
            if (other === nums[j]){
                return [i, j];
            }
        }
    }
}

var mysolution2 = function(nums, target){
    const len = nums.length;
    let hash = {};
    for (let i = 0; i < len; i++){
        const other = target - nums[i];
        if (other in hash){
            return [hash[other], i];
        }
        hash[nums[i]] = i;
    }
}

var solution3 = function(nums, target){
    const len = nums.length;
    for (let i = len; i >= 0; i--){
        const index = nums.indexOf(target - nums[i]);
        if (index !== -1 && index !== i){
            return [index, i];
        }
    }
}
// @lc code=end

