[TOC]

## 5-1 哈希表、映射、集合的实现和特性

### 哈希表 hash table

#### 概念

> key value --(hash function)--> index -> hash table
> 将关键码值经过哈希函数的计算，得出index，直接映射（放）到哈希表的下标index处

* 最佳情况：查询o(1) 插入o(1) 删除o(1)
* 最坏情况：查询o(n) 插入o(n) 删除o(n)
    * 哈希表尺寸小或者哈希函数设计不合理，导致
    * 哈希碰撞很多，造成链表拉链过长，复杂度就退化到o(n)

#### 工程实践

1. 电话号码
2. 用户信息表
3. 缓存
4. 键值对

#### 哈希碰撞

> 不同key经过哈希函数计算后的index相同，发生了“碰撞”

解决方法：

1. 往下放，占其他数的位置
2. 拉链式解决冲突法：
    1. 在发生碰撞的index处存一个链表，这样同一个index就可以存多个数了

#### Map & Set

基于哈希表抽象出来的：1）map；2）set
内部顺序均为插入顺序

参考资料：
[Map & Set in JavaScript](https://javascript.info/map-set)

##### map

参考资料：
[Map: javascript内置对象 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

> 键值对，key不重复，value可以重复

```javascript
let map = new Map();
map.set(key, value); // 建议不要用map[key]的方式，最好直接用set和get
map.get(key);
map.has(key); // true or false
map.delete(key);
map.clear();
map.size;
```

迭代器：for...of or forEach
```javascript
map.keys(); // keys
map.values(); // values
map.entries(); //[key, value]

for (let key of map.keys());
for (let val of map.values());
for (let entry of map.entries());

map.forEach((val, key, map) => {});
```

##### set

单个元素，元素不重复

```javascript
let set = new Set();
set.add(value);
set.delete(value);
set.has(value); // true or false
set.clear();
set.size;
```

迭代：for...of forEach

```javascript
set.keys(); //跟set.values()一样，返回的都是元素值
set.values(); // 为什么要做两个函数？为了跟Map兼容
set.entries(); //[value, value]

for (let val of set){};
set.forEach((val, val, set) => {}); //这里的第一个和第二个参数都是value，并且就是同一个value，也是为了和Map兼容
```

## 5-2 实战：有效的字母异位词（242）和两数之和

1. 正确理解题意（与面试官沟通，确保自己问题理解清楚了）
2. 想出所有可能性 -》找出最优解（时间和空间复杂度）
3. 写代码
4. 写测试用例
5. 收藏精选代码

[TOC]

一维数据结构：链表，数组
二维数据结构：树和图

## 6-1 树 tree 和 二叉树 binary-tree

### 树与图的关系

树和图最关键的差别：有没有环

链表是特殊化的树，树是特殊化的图【两个next指针的链表就相当于树；没有环的图就是树】

### 二叉树

至多有两个儿子结点的树。

#### 二叉树结点示例代码

结点的定义javascript:

```javascript
function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}
```

#### 二叉树的遍历

1. 前序遍历
2. 中序遍历
3. 后序遍历

### 二叉搜索树 BTS

参考资料：
[BTS demo](https://visualgo.net/zh/bst)

* 别名：二叉排序树、有序二叉树、排序二叉树（ordered binary tree/sorted binary tree)
* 左 < 根 < 右
* 中序遍历是升序遍历

#### BTS 常见操作

* 查询 o(logn)
* 插入 o(logn)
* 删除 o(logn)
    * 删除叶子结点 - 直接删掉
    * 删除非叶子结点
        * 有且仅有一个子结点：直接让该子结点替代被删除的结点
        * 有两个子结点：在其右子树中查找最小值（第一个比该结点大的）

#### BTS 复杂度分析

时间复杂度：

1. 最佳：均为o(logn)
2. 最差：均为o(n)【当二叉搜索树每个结点都只有一个子结点，这时就退化成为了单链表，复杂度也退化成了单链表的时间复杂度）

空间复杂度：o(n) n个结点

### 思考题：为什么树的题的解法以递归为主？

1. 树的结构不便于循环
2. 树的结构具有重复性

## 6-2 实战：二叉树的中序遍历

参考资料：
[树的遍历Demo](https://visualgo.net/zh/bst)

1. 递归
    1. 对递归的误解：递归的时间复杂度并不差，关键是要做缓存
2. 栈的迭代
3. 莫里斯遍历（建立一种索引树）
4. 颜色标记法
    1. 维护一个栈
    2. 未访问的结点为白色，已访问为灰色
    3. 本质是用栈手动做递归

```javascript
//递归
var inorderTraversal = function(root) {
    if (!root) return [];

    let res = [];
    let inorder = (root) => {
        if (!root) return;
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

// 迭代
var inorderTraversal = function(root){
    if (!root) return [];

    let stack = [], res = [];
    let r = root;
    while (r || stack.length !== 0){
        while (r){
            stack.push(r);
            r = r.left;
        }
        if (stack.length !== 0){
            r = stack.pop();
            res.push(r.val);
            r = r.right;
        }
    }
    return res;
}

// 颜色标记法
var inorderTraversal = function(root){
    const [WHITE, GRAY] = [0, 1];
    let res = [], stack = [];
    stack.push([WHITE, root]);
    
    let node, color;
    while (stack.length){
        [color, node] = stack.pop();
        if (!node) continue;
        if (color === WHITE){
            stack.push([WHITE, node.right]);
            stack.push([GRAY, node]);
            stack.push([WHITE, node.left]);
        }else{
            res.push(node.val);
        }
    }
    return res;
}
```

[TOC]

## 7-1 堆和二叉堆

### 堆 heap

是一种多叉树

> 特点：可以迅速找到一堆数中的最大或者最小值
> 找最大值 - 最大堆，大根堆，大顶堆
> 找最小值 - 最小堆，小根堆，小顶堆

#### 堆的常见操作

1. find-max: o(1)
2. delete-max: o(logn)
3. insert(create): o(logn) / o(1)[斐波拉契堆]

### 二叉堆

左：满二叉树（子结点要么0要么2）；右：完全二叉树：

![e708b3ac49180ce8abfb43b95a7ce587.png](evernotecid://07E004B2-31BA-450C-A72C-83DB41824273/appyinxiangcom/16039065/ENResource/p3787)

* 通过完全二叉树来实现，实现较简单，但是时间复杂度较差
* 是堆（优先队列priority_queue)的一种常见且简单的实现；但并不是最有优实现
* 为什么不用BTS来实现？
    * 事实上可以，但是如果用BTS来实现最小堆，那么find-min操作的时间复杂度会为o(logn)【即找到最左子结点的时间复杂度】

#### 二叉堆的性质

大顶二叉堆满足下列性质：

1. 是一颗完全树
2. 树中任意结点的值总是大于等于其子结点的值

#### 二叉堆实现细节

1. 二叉堆一般通过数组实现
2. 假设第一个元素在数组中的索引为0，则父结点和子结点的位置关系如下：
    1. 设某结点索引为i
    2. 其左孩子的索引是(2i + 1)
    3. 其右孩子的索引是(2i + 2)
    4. 其父结点的索引为 floor((i - 1) / 2)

#### 二叉堆的插入 o(logn)

1. 新元素一律先插入到堆的尾部（即数组的尾部）
2. 依次向上调整整个堆的结构 heapifyUp
    1. 与父结点比较大小：比父大，交换；比父小，结束调整

#### 二叉堆的删除 o(logn)

删除顶部元素：

1. 将堆尾元素替换到顶部（即用数组的尾部替换掉头部；因为我们需要保证完全二叉树的结构，除了尾部以外，其他地方都不可以为空）
2. 依次从根部（刚替换到顶部的尾部元素）向下调整整个堆的结构 heapifyDown
    1. 与左右儿子比大小：用儿子中较大的那个替换自己；直到自己大于两个儿子

## 7-2 实战：最小的k个数、滑动窗口最大值

### 最小的k个数

1. sort: o(nkogn)
2. 最小堆

### 滑动窗口最大值

1. 双端队列
2. 最大堆（把窗口内的值放入大顶堆）

### 前k个高频元素

1. 哈希表记录频次
2. 放入最大堆

## 7-3 图的实现和特性

### 图的属性

* Graph(V, E)
* vertex 点的属性：
    * 度 - 入度和出度（表示这个结点连了多少条边）
        * 如果是无向边：度 = 入度 = 出度（即不需要分为入度和出度）
        * 如果是有向边：入度表示以该结点为头的边的条数；出度表示以该结点为尾的边的条数
    * 点与点之间：连通与否
* edge 边的属性
    * 有向和无向
    * 权重：可以理解为边长

### 图的表示和分类

#### 图的表示方法

![9cb7d9864a63f95e64b31210f077438e.png](evernotecid://07E004B2-31BA-450C-A72C-83DB41824273/appyinxiangcom/16039065/ENResource/p3789)

1. 邻接矩阵 adjacency matrix
2. 邻接表 adjacency list

#### 图的分类

1. 无向无权图
2. 有向无权图
3. 无向有权图
4. 有向有权图

### 基于图的常见算法

#### DFS

和树中的dfs最大的区别：`visited = set()`

1. 树没有环路，所以访问到的点不会重复，所以不需要记录visited
2. 图有环路，所以需要记录

```javascript
// 伪代码
function dfs(node, visited){
    if (node in visited) return;
    
    visited.push(node); //和树最大的区别
    
    for (next_node in node.children()){
        if (not next_node in visited)
            dfs(next_node, visited);
    }
}
```

#### BFS

```javascript
// pseudo
function bfs(graph, start, end){
    queue = [];
    queue.append([start]);
    
    visited = set(); //和树最大的区别
    
    while (queue){
        node = queue.pop();
        visited.push(node);
        
        process(node);
        nodes = generate_related_nodes(node);
        queue.push(nodes);
    }
}
```

#### 图的一些高级算法

1. 连通图个数
2. 拓扑排序 topological sort
3. 最短路径 dijkstra
4. 最小生成树 minimum spanning tree
