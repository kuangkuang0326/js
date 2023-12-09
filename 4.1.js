//      1.
function array(a, b) {
    for (let i = 0; i < b - a + 1; i++) {
        console.log(a + i);
    }
}

function sum(string) {
    let total = 0;
    for (let sumup of string) {
        total += sumup;
    }
    return total;
}
console.log(sum([1, 2, 3]));
console.log(array(1, 10));
// console.log(sum(array(1, 10)));    ???????

//    2.
// function range(star, end, step = star < end ? 1 : -1) {
//     let array = []
//     if (step > 0) {
//         for (let i = 0; i <= end; i += step) {
//             array.push(i);
//         }
//     }
//     if (step <= 0) {
//         for (let i = 0; i >= end; i += step) {
//             array.push(i);
//         }
//     }
//     return array
// }
// function sum(string) {
//     let total = 0;
//     for (let sumup of string) {
//         total += sumup;
//     }
//     return total;
// }
// console.log(sum(range(1, 10)));
// console.log(range(1, 10));
// console.log(range(5, 2, -1));