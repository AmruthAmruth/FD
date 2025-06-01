class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  arrayToList(arr) {
    for (let val of arr) {
      this.append(val);
    }
  }

  midElement() {
    if (!this.root) {
      console.log("List is empty");
      return;
    }
    let fast = this.root;
    let slow = this.root;
    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log("Mid element of list is :", slow.value);
  }

  addValueAtMid(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let fast = this.root;
    let slow = this.root;
    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    newNode.next = slow.next;
    slow.next = newNode;
  }

  addValueAtBigging(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    newNode.next = this.root;
    this.root = newNode;
  }

  display() {
    if (!this.root) {
      console.log("List is empty");
      return;
    }
    let current = this.root;
    let str = "";
    while (current) {
      str += current.value + " -> ";
      current = current.next;
    }
    console.log(str, "null");
  }

  convertToCircular() {
    if (!this.root) {
      console.log("list is empty");
      return;
    }

    let current = this.root;
    while (current.next) {
      current = current.next;
    }
    current.next = this.root;
  }
}

const list = new LinkedList();

list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.arrayToList([10, 20, 40, 30]);
list.midElement();
list.addValueAtMid(100);
list.addValueAtBigging(1000);
list.display();
