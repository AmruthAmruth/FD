class HashTable {
  constructor(size = 5) {
    this.size = size;
    this.table = new Array(size).fill(null);
    this.count = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  _rehashing(newSize) {
    console.log("Rehashig Called");
    
    this.size = newSize;
    let oldTable = this.table;
    this.count = 0;
    this.table = new Array(newSize).fill(null);
    for (let bucket of oldTable) {
      if (bucket) {
        this.set(bucket[0], bucket[1]);
      }
    }
  }

  set(key, value) {
    let index = this._hash(key);

    while (this.table[index] !== null) {
      if (this.table[index][0] === key && this.table[index] !=="DELETED") {
        this.table[index][1] = value;
        return;
      }
      index = (index + 1) % this.size;
    }
    this.table[index] = [key, value];
    this.count++;
    if (this.count / this.size > 0.7) {
      this._rehashing(this.size * 2);
    }
  }


  get(key){
    let index = this._hash(key);
    let startIndex = index;

    while(this.table[index] !== null){
      if(this.table[index][0]===key && this.table[index] !== "DELETED"){
        return this.table[index][1]
      }
      index = (index+1) % this.size;
      if(startIndex === index) break;
    }
    return undefined;
  }


remove(key){
  let index = this._hash(key);
  let startIndex = index;
  while(this.table[index] !== null){
    if(this.table[index][0]===key){
      this.table[index]="DELETED"
      return true;
    }
    index = (index+1)%this.size;
      if(index===startIndex) break;
  }
  return false;
}

display(){
  console.log(this.table);
  
}


}


const table = new HashTable();
table.set('name','Amruth')
table.set('place','Amruth')
table.set('age','Amruth')
table.set('qwer','Amruth')
table.set('sd','Amruth')
table.remove('age')
console.log(table.get('name'));
table.display()

