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
// var twoSum = function(nums, target) {
//     
// };

var twoSum = function(nums, target) {
    //return mySolution(nums, target);
    return goodSolution1(nums, target);
};

var goodSolution1 = function (nums, target){
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

var mySolution = function (nums, target){
    let len = nums.length;
    let res = [];
    for (let i = 0; i < len; i++){
        let t2 = nums.indexOf(target - nums[i]);
        if (t2 !== -1 && t2 !== i){
            res[0] = i;
            res[1] = t2;
            break;
        }
    }
    return res;
}
// @lc code=end

