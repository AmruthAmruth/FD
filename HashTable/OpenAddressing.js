class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let item of this.table[index]) {
      if (item[0] === key) {
        item[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.table[index]) {
      console.log("Not Found");
      return;
    }
    for (let item of this.table[index]) {
      if (item[0] === key) {
        console.log(item);
        return;
      }
    }
  }

  remove(key) {
    let index = this._hash(key);
    if (!this.table[index]) {
      console.log("Not found");
      return;
    }
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        return;
      }
    }
  }
}

const table = new HashTable();
table.set("name", "Amruth");
table.set("age", "Amruth");
table.set("qwer", "Amruth");
table.set("rewq", "Amruth");
table.set("naasdfme", "Amruth");
table.get("qwer");
table.remove("qwer");
console.log(table);
