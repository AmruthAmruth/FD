

class Graph{
  constructor(){
    this.adjacencyList={}
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex]=[]
    }
  }

  addEdge(vertex1,vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addVertex(vertex1)
    }
     if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2)
    }
    this.adjacencyList[vertex1].push(vertex2);
  }


  display(){
    for(let vertex in this.adjacencyList){
      console.log(vertex, "->" , this.adjacencyList[vertex]);
      
    }
  }


  bst(start){
    let queue=[start];
    let visited=new Set();
    visited.add(start);
    while(queue.length>0){
      let item = queue.shift()
      console.log(item);
      this.adjacencyList[item].forEach((neighbor)=>{
        if(!visited.has(neighbor)){
          queue.push(neighbor)
          visited.add(neighbor)
        }
<<<<<<< HEAD
      })      
=======
        
>>>>>>> 71139c0a572e0e5434e95c4291e9c069975bac27
    }
  }

<<<<<<< HEAD
dfs(start,visted=new Set()){
  if(!this.adjacencyList[start]) return;
  visted.add(start);
  console.log(start);
  this.adjacencyList[start].forEach((neighbor)=>{
    if(!visted.has(neighbor)){
      this.dfs(neighbor,visted)
    }
  })
  
}


}

const graph = new Graph();
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("A","D")
graph.addEdge("C","E")
graph.addEdge("D","A")
graph.display()
graph.dfs("A")
=======

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
         if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
    }


}
>>>>>>> 71139c0a572e0e5434e95c4291e9c069975bac27
