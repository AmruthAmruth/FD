

class TrieNode{
  constructor(){
    this.children={};
    this.isWordEnd=false
  }
}

class Trie{
  constructor(){
    this.root=new TrieNode()
  }

  insert(word){
    let node = this.root;
    for(let char of word){
      if(!node.children[char]){
          node.children[char]=new TrieNode()
      }
      node= node.children[char]
    }
    node.isWordEnd=true;
  }


  search(word){
    let node = this.root;
    for(let char of word){
      if(!node.children[char]){
        return false
      }
      node = node.children[char]
    }
    return node.isWordEnd;
  }


 startWithPrefix(prefix){
  let node = this.root;
  for(let char of prefix){
    if(!node.children[char]){
       return false; 
    }
    node = node.children[char];
  }
  return true;
}


  autoSuggetion(prefix){
    let node = this.root;
    for(let char of prefix){
      if(!node.children[char]){
        return []
      }
      node = node.children[char]
    }
    return this.getWordFromNode(node,prefix)
  }

  getWordFromNode(node,prefix){
    let suggetion =[];
    if(node.isWordEnd) suggetion.push(prefix);
    for(let char in node.children){
      suggetion.push(...this.getWordFromNode(node.children[char],prefix+char))
    }
    return suggetion
  }

}



const trie = new Trie();

trie.insert("App")
trie.insert("Apps")
trie.insert("Appstore")
trie.insert("Application")
console.log(trie.search("App"));
console.log(trie.startWithPrefix("As"));
console.log(trie.autoSuggetion("App"));
