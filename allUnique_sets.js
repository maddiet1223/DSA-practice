const allUnique = (items) => {
    const setA = new Set(items);

    console.log(setA.size,items.length);

    if (setA.size !== items.length) {
        console.log(false);
        return;
    }

    console.log(true);
}

allUnique(["q", "r", "s", "a", "r", "z"]);
allUnique(["red", "blue", "yellow", "green", "orange"]);