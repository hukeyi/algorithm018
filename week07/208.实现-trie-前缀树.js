/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
// var Trie = function() {
//     this.root = new TrieNode();
// };
// /**
//  * Inserts a word into the trie.
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
//     let node = this.root;
//     for (const ch of word){
//         if (!node.containsKey(ch)){ //如果没有包含这个字符
//             node.put(ch, new TrieNode());
//         }
//         node = node.get(ch);
//     }
//     node.setEnd();
// };

// Trie.prototype.searchPrefix = function(word){
//     let node = this.root;
//     for (const ch of word){
//         if (node.containsKey(ch)){ //如果包含这个字符
//             node = node.get(ch); //继续向下查
//         }else{
//             return undefined;
//         }
//     }
//     return node;
// }

// /**
//  * Returns if the word is in the trie.
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
//     let node = this.searchPrefix(word);
//     return node !== undefined && node.getIsEnd();
// };

// /**
//  * Returns if there is any word in the trie that starts with the given prefix.
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
//     let node = this.searchPrefix(prefix);
//     return node !== undefined;
// };

class TrieNode {
	constructor(isEnd = false, next = new Array(26)) {
		this.isEnd = isEnd;
		this.next = next;
	}
	setEnd() {
		this.isEnd = true;
	}
	getIsEnd() {
		return this.isEnd;
	}
	put(ch, node) {
		const index = ch.charCodeAt() - 97;
		this.next[index] = node;
	}
	get(ch) {
		const index = ch.charCodeAt() - 97;
		return this.next[index];
	}
	containsKey(ch) {
		const index = ch.charCodeAt() - 97;
		return this.next[index] !== undefined;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}
	insert(word) {
		let node = this.root;
		for (const ch of word) {
			if (!node.containsKey(ch)) {
				node.put(ch, new TrieNode());
			}
			node = node.get(ch);
		}
		node.setEnd();
	}
	searchPrefix(prefix) {
		let node = this.root;
		for (const ch of prefix) {
			if (node.containsKey(ch)) {
				node = node.get(ch);
			} else {
				return undefined;
			}
		}
		return node;
	}
	search(word) {
		let node = this.searchPrefix(word);
		return node !== undefined && node.getIsEnd();
	}
	startsWith(word) {
		let node = this.searchPrefix(word);
		return node !== undefined;
	}
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
