// function count(string) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++)
//         if (string[i] == "B") {
//             count += 1;
//         }
//     return count;
// }
// console.log(count("BBC"));

function countchar(string, x) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == x) { count += 1; }
    }
    return count;
}
console.log(countchar("kuangkuang", "k"));