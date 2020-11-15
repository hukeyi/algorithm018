/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return solution2(nums, target);
};

var solution1 = function(nums, target){
    return nums.indexOf(target);
}

var solution2 = function(nums, target){
    let [left, right] = [0, nums.length - 1];
    while (left <= right){
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]){
            if (target >= nums[left] && target < nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if (target <= nums[right] && target > nums[mid]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
    return -1;
}
// @lc code=end

