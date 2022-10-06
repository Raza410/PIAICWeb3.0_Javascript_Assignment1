var names = [];
names[0] = ["Salad", "Beef", "Sauce", "Katchep"];
names[1] = ["Raita", "lasai", "Sauce", "Mirchi"];
names[2] = ["chicken", "Zafran", "Rela", "Spices"];
var text;
// text = 'Person ordered';

for (var i = 0; i < 3; i++) {
  console.log("Person Ordered:");
  text += sandwichsummary(names[i]);
}
console.log(text);

function sandwichsummary(names) {
  names.forEach((name) => {
    console.log(name);
  });
}
