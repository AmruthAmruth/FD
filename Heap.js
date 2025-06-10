

class HashTable{
    constructor(size=10){
        this.table=new Array(size);
        this.size=size
    }

    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+= key.charCodeAt(i)
        }
        return hash % this.table.length;
    }


    set(key,value){
        let index = this._hash(key);
        if(!this.table[index]){
            this.table[index]=[]
        }
        for(let item of this.table[index]){
            if(item[0]===key){
                item[1]=value;
                return
            }
        }
        this.table[index].push([key,value])
    }


    get(key){
        let hash=this._hash(key);
        if(!this.table[hash]){
            return null
        }
        for(let item of this.table[hash]){
            if(item[0]===key){
                return item[1]
            }
        }
        return null
    }


}