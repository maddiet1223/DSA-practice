const depthFirstPrint = (graph, source) => {
 //RECURSIVE

 console.log(source);
 for(let neighbour of graph[source]) {
    depthFirstPrint(graph,neighbour);
 }

    //ITERATIVE METHOD
    // const stack = [source];

    // while (stack.length > 0) {
    //     const current = stack.pop();
    //     console.log(current);
    //     for (let neighbour of graph[current]) {
    //         stack.push(neighbour);
    //     }
    // }

}



const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirstPrint(graph, 'a');