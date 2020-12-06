## 11-1 Trie树的基本实现和特性

> 查询效率比哈希表高

基本性质：

1. 结点本身不存储完整单词
2. 从根节点到某一结点，路径上经过的字符连接起来，为该结点对应的字符串
3. 每个结点的所有子结点路径代表的字符都不相同

核心思想：

1. 空间换时间
2. 利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的

实战：208.实现trie（前缀树）

要点：

1. `ch - 'a'` 是为了得到字符对应的数组下标，用字符的ascii码相减（比如，'b'-'a'等于1，代表字符'b'在link/next数组中的下标是1
2. 但是在js中不能这么用。js中需要：`ch.charCodeAt() - 97`才能得到对应的ascii码相减的值

## 11-2 实战：单词搜索ii

## 11-3 并查集 disjoint set的基本实现

适用场景：组团、配对问题；某两个元素是否在同一个集合当中？

### 并查集基本操作

* makeSet(s): 建立一个新的并查集，其中包含s个单元素集合
![eb9b3d637c69abb6d10f4c32fc16d830.png](evernotecid://07E004B2-31BA-450C-A72C-83DB41824273/appyinxiangcom/16039065/ENResource/p3881)

* unionSet(x, y): 把元素x和元素y所在的集合合并，要求x和y所在的集合不相交，如果相交则不合并
![b31ad51705063261c414e23eb2a715cc.png](evernotecid://07E004B2-31BA-450C-A72C-83DB41824273/appyinxiangcom/16039065/ENResource/p3879)

* find(x)：找到元素x所在的集合的代表，该操作也可以用于判断两个元素是否位于同一个集合，比如`find(x) === find(y)?`
![3d2f4c27a9fcfef2166afda1788afffe.png](evernotecid://07E004B2-31BA-450C-A72C-83DB41824273/appyinxiangcom/16039065/ENResource/p3880)

### 并查集代码模版

```java
class UnionFind{
    private int count = 0;
    private int[] parent;
    public UnionFind(int n){
        count = n;
        parent = new int[n];
        for (int i = 0; i < n; i++){
            parent[i] = i;
        }
    }
    
    public int find(int p){
        while (p != parent[p]){
            // 爸爸赋给爷爷
            parent[p] = parent[parent[p]];
            // 儿子赋给爸爸
            p = parent[p];
        }
        return p;
    }
    public void union(int p, int q){
        // 找出各自的领头元素
        int rootP = find(p);
        int rootQ = find(q);
        // 在同一个集合里，直接return
        if (rootP == rootQ) return;
        // 否则，直接合并
        parent[rootP] = rootQ;
        // 记得减小集合数目
        count--;
    }
}
```

```javascript
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
```


### 实战：朋友圈问题

