[toc]
## 7-1 递归的实现、特性以及思维要点

### 递归代码模版

```python
def recursion(level, param1, param2, ...):
    # recursion terminator 递归终结条件
    if level > MAX_LEVEL:
        process_result
        return
            
    # process logic in current level 处理当前层逻辑
    process(level, data, ...)
    
    # drill down 下探到下一层
    self.recusion(level + 1, p1, ...)
    
    # reverse the current level status if needed 清理当前层
```

```java
public void recur(int level, int param){
    if (level > MAX_LEVEL){
        // process result
        return;
    }
    
    process(level, param);
    recur(level: level+1, newParam);
    
    // restore current status
}
```

```javascript
function recur(level, param){
    if (level > MAX_LEVEL){
        // 递归终止
        return;
    }
    // 处理当前层逻辑
    process(level, param);
    // 下到下一层
    recur(level + 1, newParam);
    // 清理当前层状态（如果需要）
}
```

### 四个模块

1. 递归终结条件
2. 处理当前层逻辑
3. 下探到下一层
4. 清理当前层

### 思维要点

1. 不要人肉进行递归（熟练之后不要画递归状态树，应该达到直接写出递归函数的熟练度）
2. 找到最近最简的方法，将其拆解成可重复解决的问题（重复子问题）
3. 数学归纳法的思维

## 7-2 实战：爬楼梯、括号生成等

### 括号生成

> 分治和回溯本质就是递归，是递归的一个细分类
> 本质就是找重复性

## 8-1 分治和回溯的实现和特性

![f07a3c65cad4502300299b42749c3f88.png](evernotecid://07E004B2-31BA-450C-A72C-83DB41824273/appyinxiangcom/16039065/ENResource/p3818)

### 分治模版 divide & conquer

```python
def divide_conquer(problem, param1, param2, ...):
    if problem is None:
        print_result
        return
        
    # prepare data
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)
    
    # conquer subproblems
    subresult1 = self.divide_conquer(subproblems[0], p1, ...)
    subresult2 = self.divide_conquer(subproblems[1], p1, ...)
    ...
    # process and generate the final result
    result = process_result(subresult1, subresult2, ...)
    # revert the current level states
```

1. 终止条件：问题没有了/解决了
2. 处理当前层逻辑 prepare data
3. 下探到下一层 conquer subproblems

### 回溯 backtracking

模版类似于递归的模版

## 8-2 实战

### pow(x,n)

### subset

需要restate

## 8-3 实战

### 电话号码的字母组合

### n皇后
