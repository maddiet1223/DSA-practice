const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];

    while (queue.length > 0) {
        const [node, distance] = queue.shift();

        if (node === nodeB) {
            console.log(distance)
            return;
        };
        for (let neighbour of graph[node]) {
            if (!(visited.has(neighbour))) {
                visited.add(neighbour);
                queue.push([neighbour, distance + 1]);
            }

        }
    }
    console.log(-1);
};


const buildGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}


const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

shortestPath(edges, 'w', 'z');