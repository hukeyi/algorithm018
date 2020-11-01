/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
class minHeap{
    constructor(size = 0){
        this.heap = [];
        this.size = size; //当前存储的元素个数
    }
    print(){
        console.log(this.heap);
    }
    // 返回元素个数
    getSize(){
        return this.size;
    }
    top(){ //返回堆顶的值或对象
        return this.heap[0];
    }
    topValue(){ //返回堆顶的值或者对象的值
        if (typeof this.heap[0] === "object"){
            let keys = Object.keys(this.heap[0]);
            return this.heap[0][keys[0]];
        }else{
            return this.heap[0];
        }
    }
    // 是否为叶子结点
    isLeaf(pos){
        return pos >= Math.floor(this.size / 2) && pos < this.size;
    }
    // 得到左孩子
    leftChild(pos){
        return 2 * pos + 1;
    }
    // 得到右孩子
    rightChild(pos){
        return 2 * pos + 2;
    }
    // 得到父结点
    parent(pos){
        return Math.floor((pos - 1) / 2);
    }

    // 比较值或者对象（{key: value})
    compareBig(n1, n2){ //n1 > n2 ?
        if (n1 && n2 && typeof n1 === "object"){
            let key1 = Object.keys(n1);
            let key2 = Object.keys(n2);
            return n1[key1[0]] > n2[key2[0]];
        }else{
            return n1 > n2;
        }
    }

    heapifyUp(pos){ //向上调整,跟父结点比较，直到比父结点大
        let parent = this.parent(pos);
        while (pos && this.compareBig(this.heap[parent], this.heap[pos])){
            [this.heap[pos], this.heap[parent]] = [this.heap[parent], this.heap[pos]];
            pos = parent;
            parent = this.parent(pos);
        }
    }

    heapifyDown(pos){ // 向下调整，跟孩子结点比较，直到比孩子小
        if (this.isLeaf(pos)) return;

        let left = this.leftChild(pos), right = this.rightChild(pos);
        let smaller = 0;

        while (!this.isLeaf(pos)){
            if (this.heap[right]){ //不是叶子结点，那么一定有左孩子；有右孩子，比较大小
                smaller = this.compareBig(this.heap[left], this.heap[right]) ? right : left;
            }else{ //只有左孩子，直接等于left
                smaller = left;
            }

            if (this.compareBig(this.heap[pos], this.heap[smaller])){
                [this.heap[pos], this.heap[smaller]] = [this.heap[smaller], this.heap[pos]];
                pos = smaller;
                left = this.leftChild(pos); right = this.rightChild(pos);
            }else{
                break;
            }
        }
    }
    // 建堆：用已有数组heap建立最小堆
    buildHeap(heap){
        this.heap = heap;
        for (let i = Math.floor(this.size / 2 - 1); i >= 0; i--){
            this.heapifyDown(i);
        }
    }
    // 插入：放到末尾，然后向上调整
    insert(val){
        let pos = this.size++; //放到尾部
        this.heap[pos] = val;
        this.heapifyUp(pos);
    }
    
    // 删除堆顶：用最后一个元素替代堆顶，然后向下调整
    removeTop(){
        if (this.size){
            let last = this.heap.pop();
            this.size--;
            this.heap[0] = last; //替代堆顶
            this.heapifyDown(0);
        }
    }
    // 删除某个位置的元素
    remove(pos){
        if (this.size()){
            let last = this.heap.pop();
            this.size--;
            this.heap[pos] = last;
            this.heapifyDown(pos);
        }
    }
}

var nthUglyNumber = function(n) {
    let minheap = new minHeap();
    let ans = 1;
    for (let i = 1; i < n; i++){
        minheap.insert(ans * 2);
        minheap.insert(ans * 3);
        minheap.insert(ans * 5);
        ans = minheap.top();
        minheap.removeTop();
        while (minheap.getSize() && ans === minheap.top()){
            minheap.removeTop();
        }
    }
    return ans;
};
// @lc code=end

