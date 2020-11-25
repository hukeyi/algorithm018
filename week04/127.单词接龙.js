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
    return mysolution1(beginWord, endWord, wordList);
};

var mysolution1 = function(begin, end, wordlist){
    let wordset = new Set(wordlist);
    if (wordset.size === 0 || !wordset.has(end)){
        return 0;
    }

    const queue = [];
    queue.push(begin);
    let map = new Map();
    map.set(begin, 1);
    while (queue.length){
        let word = queue.shift();
        let path = map.get(word);
        for (let i = 0; i < word.length; i++){
            for (let j = 0; j <= 25; j++){
                let temp = String.fromCharCode(97 + j);
                let newWord = word.slice(0, i) + temp + word.slice(i + 1);
                if (newWord === end) return path + 1;
                if (wordset.has(newWord) && !map.has(newWord)){
                    map.set(newWord, path + 1);
                    queue.push(newWord);
                }
            }
        }
    }
    return 0;
}
// @lc code=end

