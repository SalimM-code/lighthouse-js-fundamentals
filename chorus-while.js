// first while loop example
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
    console.log(chorus);
    repeat++;
}
console.log("until the sun comes up!");

// second example. changing key after 5 repetition 
const chorus = "Let's dance";
let repeat = 0;
while (repeat < 10) {
    if (repeat === 5) {
        console.log("change key")
    }
    console.log(chorus);
    repeat++;
}
console.log("Until the sun comes up!");