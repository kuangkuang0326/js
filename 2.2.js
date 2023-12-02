
for (let i = 1; i <= 100; i++) {
    let j = "";
    // 1.  
    if (i % 3 == 0) j += "fizz";
    if (i % 5 == 0) j += "buzz";
    //  2.    if (i % 3 == 0 && i % 5 == 0) j += "fizzbuzz"
    console.log(j || i);
}
