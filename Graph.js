
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
        this.adjacencyList[vertex1].push(vertex2)
    }


}
