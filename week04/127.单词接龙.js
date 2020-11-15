/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    return solution1(beginWord, endWord, wordList);
};

var solution1 = function (beginWord, endWord, wordList){
    let wordSet = new Set(wordList);
    // 如果字典为空或 endWord不在字典里，直接返回
    if (wordSet.size === 0 || !wordSet.has(endWord)){
        return 0;
    }

    const queue = [];
    queue.push(beginWord);
    let map = new Map(); //记录单词对应路径长度
    map.set(beginWord, 1);

    while (queue.length){
        let word = queue.shift();
        let path = map.get(word);
        for (let i = 0; i < word.length; i++){
            for (let j = 0; j <= 25; j++){
                let temp = String.fromCharCode((97 + j));
                let newWord = word.slice(0, i) + temp + word.slice(i + 1);
                if (newWord === endWord){
                    return path + 1;
                }
                // 如果新单词在set中，但是没有访问过
                if (wordSet.has(newWord) && !map.has(newWord)){
                    map.set(newWord, path + 1); //记录单词对应的路径长度
                    queue.push(newWord); //加入队尾
                }
            }
        }
    }
    return 0;
}
// @lc code=end

