class HashTable{
    constructor(size=5){
        this.table=new Array(size);
        this.size=size;
        this.count=0;
    }

    _hash(key){
        let hash= 0;
        for(let i=0;i<key.length;i++){
            hash+= key.charCodeAt(i)
        }
        return hash % this.size;
    }

    _rehash(){
        console.log("Rehashing...!");

        let oldTable= this.table;
        this.table=new Array(this.size*2)
        this.size=this.size*2
        this.count=0;
        for(let bucket of this.table){
            if(bucket){
                for(let [key,value] of bucket){
                    this.set(key,value)
                }
            }
        }
    }

    _loadFactor(){
        return this.count / this.size
    }

    set(key,value){
        if(this._loadFactor() > 0.7){
            this._rehash()
        }
        let index = this._hash(key)
        if(!this.table[index]){
            this.table[index]=[]
        }
        for(let item of this.table[index]){
            if(item[0]===key){
                item[1]=value;
                return;
            }
        }
        this.table[index].push([key,value])
        this.count++
    }

    get(key){
        let index = this._hash(key)
        if(!this.table[index]){
            console.log("Not found");
            return;
        }
        for(let item of this.table[index]){
            if(item[0]===key){
                console.log(item);
                return;
            }
        }
    }

    display(){
        console.log(this.table);

    }

}

const table = new HashTable(4);

table.set("name", "Amruth");
table.set("place", "Wayanad");
table.set("language", "JS");
table.set("bike", "Bullet");
table.set("fruit", "Mango");
table.display()

let arr = [1, 5, 4, 2, 3, 4, 5];

function firstNonReptingElem(arr) {
  let seen = new Set();
  for (let val of arr) {
    if (seen.has(val)) {
      return val;
    }
    seen.add(val);
  }
  return "All elem are unique";
}

console.log(firstNonReptingElem(arr));





let str = "amruth";

function countFrequncy(str) {
  let frequncy = {};

  for (let val of str) {
    frequncy[val] = (frequncy[val] || 0) + 1;
  }
  return frequncy;
}

console.log(countFrequncy(str));

let str1='listen'
let str2='silent';
function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    const count ={}
    for(let char of str1){
            count[char]=(count[char] || 0)+1
    }
    for(let char of str2){
        if(!count[char]){
            return false
        }
        count[char]--
    }

    return true
}

console.log(isAnagram(str1,str2));

function lengthOfLongestSubstring(str){
    let map={}
    let maxLen=0;
    let start=0;
    for(let i=0;i<str.length;i++){
        let char = str[i]

        if(map[char] >= start){
            start=map[char]+1
        }
        map[char]=i;
        maxLen=Math.max(maxLen,i-start+1)
    }
    return maxLen
}

console.log(lengthOfLongestSubstring("asdweeeeee"));

class Table {
  constructor(size = 10) {
    this.Table = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.Table.length;
  }

  set(key, value) {
    let index = this.Table[key];
    if (!this.Table[index]) {
      this.Table[index] = [];
    }
    for (let item of this.Table[index]) {
      if (item[0] === key) {
        item[1] = value;
        return;
      }
    }
    this.Table[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.Table[index]) {
      console.log("Not found");
      return;
    }

    for (let item of this.Table[index]) {
      if (item[0] === key) {
        return item;
      }
    }
  }
}
