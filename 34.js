let pizzas = ["Veggie Pizza", "Pepperoni Pizza", "BBQ Chicken Pizza"];

for (var i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}

for (var i = 0; i < pizzas.length; i++) {
  console.log(` I like  ${pizzas[i]}`);
}

console.log(`I love pizza so much, 
it's one of the best in fast food with full of  nutritions. `);

//mine one
var fvrt_pizza = ["Fajita", "Tikka", "pepperoni"];
let pizza = "";

for (let i = 0; i < fvrt_pizza.length; i++) {
  pizza += +fvrt_pizza[i] + "<br>";
}

var pizza_lines = [
  "fajita is one of my favourite",
  "Tikka pizza has a different taste according to texture",
  "pepperoni is full of souce and wet",
];
let pizza_liner = "";

for (let i = 0; i < pizza_lines.length; i++) {
  pizza_liner += "Good day! " + pizza_lines[i] + "<br>";
}

console.log(
  `I like chicken fajita pizza, with full of chicken and chese. Soucage are plus \n${fvrt_pizza} : ${pizza_liner}`
);
