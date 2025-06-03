class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null);
        this.count = 0;
    }

    _hash(key) {
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            index += key.charCodeAt(i);
        }
        return index % this.table.length;
    }

    _rehashing(newSize) {
        this.size = newSize;
        this.count = 0;
        const oldTable = this.table;
        this.table = new Array(this.size).fill(null);
        for (let bucket of oldTable) {
            if (bucket !== null) {
                this.set(bucket[0], bucket[1]);
            }
        }
    }

    set(key, value) {
        let index = this._hash(key);
        let i = 0;
        let newIndex;

        while (true) {
            newIndex = (index + i * i) % this.size;
            if (this.table[newIndex] === null) {
                this.table[newIndex] = [key, value];
                this.count++;
                break;
            } else if (this.table[newIndex][0] === key) {
                this.table[newIndex][1] = value;
                break;
            }
            i++;
            if (i === this.size) {
                console.log("Hash table is full");
                break;
            }
        }

        if (this.count / this.size > 0.7) {
            this._rehashing(this.size * 2);
        }
    }

    get(key) {
        let index = this._hash(key);
        let i = 0;
        let newIndex;

        while (i < this.size) {
            newIndex = (index + i * i) % this.size;
            if (this.table[newIndex] === null) {
                return undefined;
            }
            if (this.table[newIndex][0] === key) {
                return this.table[newIndex][1];
            }
            i++;
        }
        return undefined;
    }
}

// Example usage
const table = new HashTable();
table.set("name", "Amruth");
table.set("age", 20);
table.set("plac", "Amruth");
table.set("we", "Amruth");
table.set("nasdme", "Amruth");

console.log(table.get("name"));  // Output: Amruth
