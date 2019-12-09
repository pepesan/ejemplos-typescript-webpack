export function estructuras() {
    console.log("Módulo de estructuras");
    var arr = [10, 20, 30, 40];

    for (var val of arr) {
        console.log(val); // prints values: 10, 20, 30, 40
    }

    arr = [10, 20, 30, 40];

    for (let index in arr) {
        console.log(index); // prints indexes: 0, 1, 2, 3

        console.log(arr[index]); // prints elements: 10, 20, 30, 40
    }
}
