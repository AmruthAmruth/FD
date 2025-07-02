class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (newNode.value > root.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  inOrder(root = this.root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root = this.root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  preOrder(root = this.root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  isValidBST(root = this.root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.value <= min || root.value >= max) return false;
    return (
      this.isValidBST(root.left, min, root.value) &&
      this.isValidBST(root.right, root.value, max)
    );
  }

  search(root = this.root, value) {
    if (!root) return false;
    if (root.value === value) {
      return true;
    }
    if (value < root.value) {
      return this.search(root.left, value);
    } else if (value > root.value) {
      return this.search(root.right, value);
    }
  }

  kthSamlest(k) {
    let result = null;
    let count = 0;
    function inorderTravels(node) {
      if (result !== null || !node) return;
      inorderTravels(node.left);
      count++;
      if (count === k) {
        result = node.value;
        return;
      }
      inorderTravels(node.right);
    }
    inorderTravels(this.root);
    return result;
  }

  findMin(root) {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  deleteBST(value, root = this.root) {
    if (!root) return null;
    if (value < root.value) {
      root.left = this.deleteBST(value, root.left);
    } else if (value > root.value) {
      root.right = this.deleteBST(value, root.right);
    } else {
      if (root.left === null && root.right === null) return null;

      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let succosser = this.findMin(root.right);
      root.value = succosser.value;
      root.right = this.deleteBST(succosser.value, root.right);
    }
    return root;
  }


  findHeight(root){
    if(!root) return -1;
    let leftHeight= this.findHeight(root.left);
    let rightHeight= this.findHeight(root.right);
    return 1 + Math.max(leftHeight,rightHeight)
  }

  countLeafNode(root=this.root){
    if(!root) return 0;
    if(!root.left && !root.right) return 1;

    return this.countLeafNode(root.left) + this.countLeafNode(root.right)
  }


  findClosest(root=this.root,target){
    let closest = root.value;
    let current = this.root;
    while(current){
      if(Math.abs(target-current.value) < Math.abs(target-closest)){
        closest=current.value
      }

      if(target<current.value){
        current=current.left;
      }else if(target>current.value){
        current=current.right
      }else{
        break;
      }
    } 
    return closest
  }

}

const bst = new BinarySearchTree();
[5, 3, 7, 2, 4, 9].forEach((val) => bst.insert(val));
console.log("Is Valid BST :", bst.isValidBST());
console.log("Is Search In BST :", bst.search(undefined, 5));
console.log("Kth smallest :", bst.kthSamlest(2));
bst.deleteBST(1);
console.log("BST Height ", bst.findHeight(bst.root));
console.log("BST Count Leaf : ",bst.countLeafNode());
console.log("Find Closest Value : ", bst.findClosest(undefined,50));

bst.inOrder();
