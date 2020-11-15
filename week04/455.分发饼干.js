/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    return solution2(g, s);
};

// 大的满足大的 120ms ? 为啥能过，思路明明是错的？
var solution1 = function(g, s){
    let res = 0;
    g.sort((a, b) => b - a); //递减
    s.sort((a, b) => b - a); //递减

    let childNum = g.length, cookieNum = s.length;
    for (let i = 0; i < childNum; i++){
        if (g[i] > s[0]) continue;
        for (let j = 0; j < cookieNum; j++){
            if (s[j] >= g[i]){
                res++; cookieNum--; s.shift();
                break;
            }
        }
    }
    return res;
}
// 先满足小的
var solution2 = function(g, s){
    let res = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = j = 0;
    while (i < g.length && j < s.length){
        if (s[j] >= g[i]){
            res++;
            i++; j++;
        }else{
            j++;
        }
    }
    return res;
}
// @lc code=end

