class Graph {
  constructor() {
    this.adjancencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjancencyList[vertex1].push(vertex2);
  }

  bfs(start) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
      let item = queue.shift(); // FIFO queue for BFS
      console.log(item);

      this.adjancencyList[item].forEach((val) => {
        if (!visited.has(val)) {
          visited.add(val);
          queue.push(val);
        }
      });
    }
  }

  dfs(start, visited = new Set()) {
    if (!this.adjancencyList[start]) return;

    console.log(start);
    visited.add(start);

    this.adjancencyList[start].forEach((val) => {
      if (!visited.has(val)) {
        this.dfs(val, visited);
      }
    });
  }
}

const grap = new Graph();
grap.addEdge("A", "B");
grap.addEdge("B", "C");
grap.addEdge("B", "D");
grap.addEdge("C", "D");

console.log("DFS:");
grap.dfs("A");

console.log("BFS:");
grap.bfs("A");
