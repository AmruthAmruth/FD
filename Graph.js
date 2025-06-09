
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
        if(this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        this.adjacencyList[vertex1].push(vertex2)
    }


}
