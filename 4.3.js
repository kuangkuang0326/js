function arraytolist(array) {
    let list = null;
    for (let i = 0; i < array.length; i++) {
        list = { value: array[i], rest: list }
    }
    return list;
}
console.log(arraytolist([10, 20]));

// function listtoarray(list) {
//     let newarray = [];
//     for (let j = list; j; j = j.rest) {
//         newarray.push(j.value);
//     }
//     return newarray;
// }
// console.log(listtoarray(arraytolist([10, 20, 30])));

// function prepend(k, list) {
//     return { k, rest: list };
// }
// console.log(prepend(10, prepend(20, null)));