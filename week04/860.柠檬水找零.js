/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    return mysolution1(bills);
};

var mysolution1 = function (bills) {
    let five = ten = 0;
    for (const bill of bills) {
        if (bill === 5) five++;
        else if (bill === 10){ five--; ten++;}
        else if (ten > 0) { five--; ten--; }
        else five -= 3;
        if (five < 0) return false;
    }
    return true;
}
// @lc code=end

