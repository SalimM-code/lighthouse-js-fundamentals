const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++
}
// a while loop that prints out the contents of ingredients:

for (i = 0; i < ingredients.length; i++){
    console.log(ingredients[i]);
}
// a for loop that prints out contents of ingredients:

// reversed array
const reversed = ingredients.reverse();
for (i = 0; i < reversed.length; i++){
    console.log(reversed[i]);
}
// a for loop that prints out contents of ingredients but backwards.