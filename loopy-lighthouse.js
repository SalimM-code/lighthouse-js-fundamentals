// we need a loop that will print number 100 to 200
// there are multiple conditions so we will use else if statements.

// first write the for loop and define its conditions
// for (let x = 100 ; x <= 200 ; x++) {
    if ((x % 3 === 0) && (x % 4 === 0)) {
        console.log("LoopyLighthouse");
    } else if (x % 3 === 0) {
        console.log("Loopy");
    } else if (x % 4 === 0) {
        console.log("Lighthouse");
    } else {
        console.log(x);
    }


