
class MinHeap{
    constructor(){
        this.heap=[]
    }

    getParent(index){
        return Math.floor((i-1)/2)
    }

    insert(vlaue){
        this.heap.push(value);
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(index){
        let parentIndex= this.getParent(index);
        while(index > 0 && this.heap[parentIndex] > this.heap[index]){
            [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
            index=parentIndex;
            parentIndex=this.getParent(index)
        }
    }


    
}