class HashTable {
  constructor(size) {
    this.table = new Array(size).fill(null);
    this.size = size;
    this.count = 0;
  }

  _hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  _rehashing() {
    console.log("Rehashing");
    let oldTable = this.table;
    this.table = new Array(this.size * 2).fill(null);
    this.count = 0;
    for (let item of oldTable) {
      if (item) {
        this.set(item[0], item[1]);
      }
    }
  }

  _loadFactor() {
    return this.count / this.size;
  }

  set(key, value) {
    if (this._loadFactor() > 0.7) {
      this._rehashing();
    }
    let index = this._hash(key);
    while (this.table[index] && this.table[index][0] !== key) {
      index = (index + 1) % this.size;
    }
    if (!this.table[index]) {
      this.count++;
    }
    this.table[index] = [key, value];
  }

  get(key) {
    let index = this._hash(key);
    let start = index;
    while (this.table[index]) {
      if (this.table[index][0] == key) {
        return this.table[index][1];
      }
      index = (index + 1) % this.size;
      if (start === index) break;
    }
    return "Not Found..!";
  }

  display(){
    console.log(this.table);
    
  }
}


const table = new HashTable(5)

table.set("name","Amruth")
table.set("mane","Amruth")
table.set("mnea","Amruth")
table.set("aemn","Amruth")
table.set("neae","Amruth")
table.display()