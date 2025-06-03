

class TrieNode{
    constructor(){
        this.children={}
        this.isWordEnd=false;
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
            node = node.children[char]
        }
        node.isWordEnd=true;
    }

    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                return false;
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
            node = node.children[char]
        }
        return true
    }


    autoSuggetion(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }
        return this.getWordFrom(node,prefix)
    }

    getWordFrom(node,prefix){
        let suggetion=[]
        if(node.isWordEnd) suggetion.push(prefix)

            for(let char in node.children){
                suggetion.push(...this.getWordFrom(node.children[char],prefix+char))
            }
            return suggetion;
    }

}

const trie = new Trie()

trie.insert("Apple")
trie.insert("App")
trie.insert("Appstore")
trie.insert("Applecarplay")
trie.insert("Appcase")
console.log(trie.search("Apple"));
console.log(trie.startWithPrefix("App"));
console.log(trie.autoSuggetion("A"));


