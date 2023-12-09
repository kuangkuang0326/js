// function reversearray(array) {
//     let newarray = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         newarray.push(array[i]);
//     }
//     return newarray;
// }
// console.log(reversearray(["a", "b", "c"]));

function reverarrayinplace(array) {
    let newarray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newarray.push(array[i]);
    }
    return newarray;
}
let arrayvalue = [1, 2, 3, 4, 5];
console.log(reverarrayinplace(arrayvalue));