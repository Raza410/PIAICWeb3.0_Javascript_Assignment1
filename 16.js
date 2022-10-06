const names = ["Talha", "Abdullah", "Ashfaq", "Usman"];
let names_length = names.length;

var text = "";

console.log(text);
result = invitation(names_length, names);
console.log(result);
console.log(names[0] + " will not make it.");
const index = names.indexOf("Saad"); // 👉️  0

if (index !== -1) {
  names[index] = "Raza";
}
console.log("New List:");
console.log(names);

new_result = invitation(names_length, names);
console.log("New Invitations:");
console.log(new_result);

const new_names = ["Abdullah", "Ahmed", "Talha"];
console.log("\n New Guests Names:");
console.log(new_names);
names.unshift(new_names[0]);
names.splice(3, 0, new_names[1]);
names.push(new_names[2]);
console.log(names);
new_names_length = names.length;
final_results = invitation(new_names_length, names);
console.log("\n Final Results:");

console.log(final_results);

function invitation(names_length, names) {
  text = "";
  for (let i = 0; i < names_length; i++) {
    text += "\n" + names[i] + " i would like to invite to dinner.";
  }
  return text;
}
