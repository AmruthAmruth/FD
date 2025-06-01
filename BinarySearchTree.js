

// class Node{
//   constructor(value){
//     this.value=value;
//     this.left=null;
//     this.right=null
//   }
// }

// class BinarySearchTree{
//   constructor(){
//     this.root=null
//   }

//   insert(value){
//     const newNode = new Node(value)
//     if(!this.root){
//       this.root=newNode
//     }else{
//         this.insertNode(this.root,newNode)
//     }
//   }

//   insertNode(root,newNode){
//     if(newNode.value<root.value){
//       if(root.left===null){
//         root.left=newNode;
//       }else{
//         this.insertNode(root.left,newNode)
//       }
//     }else if(newNode.value>root.value){
//       if(root.right==null){
//         root.right=newNode
//       }else{
//         this.insertNode(root.right,newNode)
//       }
//     }
//   }


//   inorder(root){
//     if(root){
//       this.inorder(root.left);
//       console.log(root.value);
//       this.inorder(root.right)
      
//     }
//   }


//   search(root=this.root,value){
//     if(root===null){
//       return false
//     }

//     if(root.value===value){
//       return true
//     }else if(value<root.value){
//       return this.search(root.left,value)
//     }else{
//       return this.search(root.right,value)
//     }
//   }

//   max(current){
    
//     while(current.right){
//       current=current.right
//     }
//     return current.value
//   }

//   isBST(root,min=-Infinity,max=Infinity){
//     if(!root){
//       return true
//     }
//     if(root.value <= min || root.value >= max){
//       return false
//     }
//     return (this.isBST(root.left,min,root.value) && this.isBST(root.right,root.value,max))
//   }

 
//   kthSmallest(k){
//     let result=null;
//     let count=0;
//     function inorder(node){
//       if(result !== null || !node){
//         return
//       }
//             inorder(node.right)
//             count++
//             if(count===k){
//               result=node.value;
//               return;
//             }
//             inorder(node.left)
//     }
//     inorder(this.root)
//     return result;
//   }


//   min(root){
//     while(root.left){
//       root=root.left
//     }
//     return root.value
//   }

//   deleteNode(root,value){
//     if(!root) return null;
//     if(value<root.value){
//    root.left=   this.deleteNode(root.left,value)
//     }else if(value>root.value){
//     root.right=  this.deleteNode(root.right,value)
//     }else{

//       if(!root.right && !root.left) return null;

//       if(!root.right) return root.left;
//       if(!root.left) return root.right;

//       let minValue = this.min(root.right)
//       root.value=minValue;
//       root.right=this.deleteNode(root.right,minValue)

//     }
//     return root
//   }


//   countLeaf(root){
//     if(!root) return 0;

//     if(!root.right && !root.left) return 1;

//     return this.countLeaf(root.right) + this.countLeaf(root.left)
//   }

// }


// const BST = new BinarySearchTree();
// BST.insert(2)
// BST.insert(1)
// BST.insert(4)
// BST.insert(5)
// console.log(BST.search(21));
// console.log("Max Value : ",BST.max());
// console.log("IS Valid BST : ",BST.isBST(BST.root));
// console.log("Kth largest :", BST.kthSmallest(2));

// BST.inorder(BST.root)