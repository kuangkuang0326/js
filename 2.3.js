let size = 8;
let k = "";
for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
        if ((i + j) % 2 == 0) {
            k += " ";
        }
        else { k += "#"; }
    }
    k += "\n";
}
console.log(k);