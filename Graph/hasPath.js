const hasPath = (graph, src, dst) => {
    //breadth first way
      const queue = [src];

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === dst) {
            console.log(true);
            return;
        }

        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
    console.log(false);


    //depth first way
    // const stack = [src];

    // while (stack.length > 0) {
    //     const current = stack.pop();

    //     if (current === dst) {
    //         console.log(true);
    //         return;
    //     }

    //     for (let neighbour of graph[current]) {
    //         stack.push(neighbour);
    //     }
    // }
    // console.log(false);
};

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

hasPath(graph, 'f', 'k');
hasPath(graph, 'f', 'j');