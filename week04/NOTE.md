[toc]

## 9-1 深搜和广搜

其他的搜索方式：启发式搜索（优先级优先）

### 深搜的代码模版

递归写法：

```python
def dfs(node):
    # terminator
    if node in visited:
        # already visited
        return
    visited.add(node)
    
    # current node
    dfs(node.left)
    dfs(node.right)

---
visited = set()
def dfs(node, visited):
    # terminator
    if node in visited:
        return
       
    visited.add(node)
    # current logic
    for next_node in node.children():
        if not next_node in visited:
            dfs(next_node, visited)
```

非递归写法：

```python
def dfs(self, tree);
    if tree.root is None:
        return []
        
    visited, stack = [], [tree.root]
    
    while stack:
        node = stack.pop()
        visited.add(node)
        
        process(node)
        nodes = generate_related_nodes(node)
        stack.push(nodes)
```

### 广搜的代码模版

```python
def bfs(graph, start, end):
    queue = []
    queue.append([start])
    visited.add(start)
    
    while queue:
        node = queue.popleft()
        visited.add(node)
        
        process(node)
        nodes = generate_related_nodes(node)
        queue.push(nodes)
```

[toc]

## 9-2 贪心算法的实现和特性

### 概念

> 贪心算法是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或最优的算法

### 与动态规划的不同

贪心算法它对每个子问题的解决方案都作出选择，不能回退。动态规划会保存以前的运算结果，并根据以前的结果对当前进行选择，且可以回退。

* 贪心：当下做局部最优判断
* 回溯：能够回退
* 动态规划：最优判断+回退

### 能解决的问题

贪心可以解决一些最优化的问题。比如最小最大最优。

一旦一个问题可以通过贪心来解决，那么贪心一般是解决这个问题的最好方法。

贪心非常高效，得到的结果非常接近最优解，所以它也可以用作辅助算法，比如去求一些不要求结果很精确的问题。

### 实战题目：coin change

### 适用贪心的场景

1. 问题能够分解成子问题
2. 子问题的最优解能递推到最终的最优解。【这种子问题最优解称为最优子结构】

贪心法的难点就在于，决定一个问题能不能用贪心法。

## 9-3 二分查找的实现特性以及实战

### 二分查找的前提（熟记）

总结：单调有界有索引

1. 目标函数单调性
2. 存在上下界 bounded
3. 能够通过索引访问 index accessible

### 二分查找代码模版

```python
left, right = 0, len(array) - 1
while left <= right:
    mid = (left + right) / 2
    if array[mid] == target:
        # find the target
        break or return result
    elif array[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
```

```javascript
let [left, right] = [0, arr.length - 1];
while (left <= right){ //小于等于
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target){ //等于
        break || return res;
    }
    else if (arr[mid] < target){ //小于
        left = mid + 1;
    }else{ // 大于等于
        right = mid - 1;
    }
}
```
