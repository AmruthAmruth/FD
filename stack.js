class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    return this.stack[this.stack.length - 1]; 
  }

  display() {
    console.log("Stack (top to bottom):");
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i]);
    }
  }
}

const stack = new Stack();

stack.push(10);
stack.push(2);
stack.push(3);
stack.push(5);
stack.push(6);
stack.push(10);

console.log("Popped:", stack.pop());  
console.log("Top:", stack.peek());  
stack.display();
