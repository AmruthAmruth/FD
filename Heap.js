class minHeap {
  constructor() {
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleDown(this.heap.length - 1);
  }

  bubbleDown(index) {
    let parentIndex = this.getParent(index);
    while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
      parentIndex = this.getParent(index);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubleDown(0);
    return min;
  }

  getLeftChild(i) {
    return 2 * i + 1;
  }
  getRightChild(i) {
    return 2 * i + 2;
  }

  bubleDown(index) {
    let smallest = index;
    let left = this.getLeftChild(index);
    let right = this.getRightChild(index);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      this.bubleDown(smallest);
    }
  }

  display() {
    console.log(this.heap);
  }

  arrToHeap(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
    }
  }

  heapSort() {
    let originalSize = this.heap.length;
    let sorted = [];
    for (let i = 0; i < originalSize; i++) {
      sorted.push(this.extractMin());
    }
    return sorted;
  }
}

const heap = new minHeap();

heap.arrToHeap([9, 4, 7, 1, 3, 10, 2]);

heap.extractMin();
console.log(heap.heapSort());