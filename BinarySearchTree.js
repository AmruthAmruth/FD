

class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null
  }
}



class BinarySearchTree{
  constructor(){
    this.root=null;
  }

  insert(value){
    const newNode = new Node(value)
    if(!this.root){
      this.root=newNode;
    }else{
      this.insertNode(newNode,this.root)
    }
  }

  insertNode(newNode,root){
    if(newNode.value<root.value){
      if(root.left===null){
        root.left=newNode
      }else{
        this.insertNode(newNode,root.left)
      }
    }else if(newNode.value>root.value){
      if(root.right===null){
        root.right=newNode
      }else{
        this.insertNode(newNode,root.right)
      }
    }
  }

  inOrder(root=this.root){
      if(root){
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right)
        
      }
  }

  search(value,root=this.root){
    if(!root){
      return false
    }
    if(value===root.value){
      return true;
    }
    if(value<root.value){
      return this.search(value,root.left)
    }else if(value>root.value){
      return this.search(value,root.right)
    }else{
      return false
    }
  }

  isBST(root=this.root,min=-Infinity,max=Infinity){
    if(!root){
      return true
    }
    if(root.value <= min || root.value>= max){
      return false
    }
    return (this.isBST(root.left,min,root.value) && this.isBST(root.right,root.value,max))
  }

  kthSmallest(k){
    let count=0;
    let result=null;
    function inOrderTravels(node){
      if(!node || result !== null){
        return 
      }
      inOrderTravels(node.left);
      count++
      if(count===k){
        result=node.value
        return 
      }
      inOrderTravels(node.right)
    }
    inOrderTravels(this.root)
    return result
  }

  findMin(root){
    let current = root;
    while(current.left){
      current=current.left
    }
    return current
  }

  deleteBST(value,root=this.root){
    if(!root){
      return null
    }

    if(value<root.value){
      root.left = this.deleteBST(value,root.left)
    }else if(value > root.value){
      root.right=this.deleteBST(value,root.right)
    }else{

      if(!root.left && !root.right){
        return null
      }

      if(!root.left) return root.right;
      if(!root.right) return root.left;

      let succosser= this.findMin(root.right);
      root.value=succosser.value;
      root.right=this.deleteBST(succosser.value,root.right)


    }
    return root;

  }

}



const bst = new BinarySearchTree()
bst.insert(1)
bst.insert(4)
bst.insert(3)
bst.insert(5)
bst.insert(7)
bst.insert(2)
bst.deleteBST(2)
bst.inOrder()
console.log(bst.search(40));
console.log(bst.isBST());
console.log(bst.kthSmallest(2));







