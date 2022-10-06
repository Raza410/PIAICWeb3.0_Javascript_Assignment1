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

function invitation(names_length, names) {
  text = "";
  for (let i = 0; i < names_length; i++) {
    text += "\n" + names[i] + " i would like to invite to dinner.";
  }
  return text;
}
