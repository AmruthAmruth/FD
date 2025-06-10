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

  addAtMiddle(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let fast = this.root;
    let slow = this.root;
    while (fast.next && fast.next.next) {
      slow = fast;
      fast = fast.next.next;
    }

    newNode.next = slow.next;
    slow.next = newNode;
  }

  display() {
    let result = "";
    let current = this.root;
    while (current) {
      result += current.value + " -> ";

      current = current.next;
    }
    console.log(result + "null");
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.display();
