/**
 * @param {number[][]} M
 * @return {number}
 */
// 实现并查集
class UnionFind {
	constructor(n) {
		this.count = n;
		this.parent = [];

		for (let i = 0; i < n; i++) {
			this.parent[i] = i;
		}
	}
	find(p) {
		while (this.parent[p] !== p) {
			this.parent[p] = this.parent[this.parent[p]];
			p = this.parent[p];
		}
		return p;
	}
	union(p, q) {
		let rootP = this.find(p),
			rootQ = this.find(q);
		if (rootP === rootQ) return;
		this.parent[rootP] = rootQ;
		this.count--;
		return;
	}
}
var findCircleNum = function (M) {
	const num = M.length;
	const friendCircle = new UnionFind(num);
	// 因为是对称矩阵，所以最后一个人与其他所有人的朋友关系都会提前遍历一遍
	// 也就是说只需要遍历上三角形
	// 因此也就不用遍历i=num-1了
	for (let i = 0; i < num - 1; i++) {
		for (let j = i + 1; j < num; j++) {
			if (M[i][j] === 1) friendCircle.union(i, j);
		}
	}
	return friendCircle.count;
};
