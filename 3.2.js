function iseven(n) {
    if (n == 0) return true;
    if (n == 1) return false;
    if (n < 0) return iseven(-n);
    else { return iseven(n - 2); }
}
console.log(iseven(50));
console.log(iseven(75));
console.log(iseven(-1));