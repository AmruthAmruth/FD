

class Heap{
    constructor(){
        this.value=[]
    }

    insert(value){
        this.value.push(value)
        this.bubbleUp()
    }

    bubbleUp(){
        let index=this.value.length-1;
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            let parent = this.value[parentIndex]
            let element=this.value[index]
            if(parent>element) break;
            this.value[parentIndex]=element;
            this.value[index]=parent
            index=parentIndex
        }
    }


    



    display(){
        console.log(this.value);
        
    }
}

const heap = new Heap()
heap.insert(1)
heap.insert(3)
heap.insert(4)
heap.insert(3)
heap.insert(5)
heap.display()