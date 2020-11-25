/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} com
 * @param {number[][]} obs
 * @return {number}
 */
var solution1 = function(com, obs){
    let dx = [0,1,0,-1];
    let dy = [1,0,-1,0];
    let di = endX = endY = res = 0;
    const hashObs = {};
    for(let i = 0; i < obs.length; i++){
        hashObs[obs[i][0] + '-' + obs[i][1]] = true;
    }
    for(let j = 0; j < com.length; j++){
        if(com[j] === -2){
            di = (di + 3) % 4;
        }else if(com[j] === -1){
            di = (di + 1) % 4;
        }else{
            // 每走一步
            for(let k = 1; k <= com[j]; k++){
                let nextX = endX + dx[di];
                let nextY = endY + dy[di];
                // 判断下一步是否为障碍物
                if(hashObs[nextX + '-' + nextY]){
                    break;
                }
                endX = nextX;
                endY = nextY;
                res = Math.max(res, endX * endX + endY * endY);
            }
        }
    }
    return res;
}
var robotSim = function(com, obs) {
    return solution1(com, obs);
};
// @lc code=end

