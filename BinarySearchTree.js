
class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null
  }
}


class BinarySearchTree{
  constructor(){
    this.root=null
  }

  insert(value){
    const newNode = new Node(value)
    if(!this.root){
      this.root=newNode
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



  search(value,root=this.root){
    if(!root){
      return false
    }
    if(value===root.value){
      return true;
    }else if(value<root.value){
      return this.search(value,root.left)
    }else{
      return this.search(value,root.right)
    }
  }


  isValidBST(root,min=-Infinity,max=Infinity){
    if(!root){
      return true;
    }
    if(min>= root.value || max<= root.value){
      return false
    }

    return (this.isValidBST(root.left,min,root.value) && this.isValidBST(root.right,root.value,max))
  }


  inOrder(root){
    if(root){
      this.inOrder(root.left)
      console.log(root.value);
      this.inOrder(root.right)
      
    }
  }



  kthSmallest(k){
    let result=null;
    let count=0;
    function inorderTravels(node){
      if(!node || result!==null){
        return result;
      }
        inorderTravels(node.left)
        count++
        if(count===k){
          result=node.value
          return result
        }
        inorderTravels(node.right)
    }
    inorderTravels(this.root)
    return result
  }

}


const bst = new BinarySearchTree()

bst.insert(3)
bst.insert(2)
bst.insert(1)
bst.insert(7)
bst.insert(8)
console.log(bst.search(13));
console.log(bst.isValidBST(bst.root));
bst.inOrder(bst.root)

console.log(bst.kthSmallest(3));
