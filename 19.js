let names = ["Talha", "Abdullah", "Ashfaq", "Usman"];
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

const new_names = ["Abdullah", "Ahmed", "Sameer"];
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

/*  17 Answers starts from here */

new_invitation = new_invitation(new_names_length, names);
console.log("\n New invitation Results:");

console.log(new_invitation);

removing_guests_from_invitation = removing_guests_from_invitation(
  new_names_length,
  names
);
console.log("\n Guest Not Invited and message Printed:");
console.log(removing_guests_from_invitation);

console.log("\n Remaing Guests");
console.log(names);

final_names_length = names.length;
final_invitation = final_invitation(final_names_length, names);
console.log("\n Invited Guests:");
console.log(final_invitation);
console.log("Guests Invited:" + final_names_length);
names = [];
// console.log(' maked sure actually have an empty list at the end of our program.' + names)

function invitation(names_length, names) {
  text = "";

  for (let i = 0; i < names_length; i++) {
    text += "\n" + names[i] + " i would like to invite to dinner.";
  }
  return text;
}

function new_invitation(names_length, names) {
  text = "";
  for (let i = 0; i < names_length; i++) {
    text +=
      "\n" +
      names[i] +
      " Sorry For inconvenience, But we can only invite two guests :(.";
  }
  return text;
}

function removing_guests_from_invitation(names_length, names) {
  text = "";
  names_length = names_length - 2;
  for (let i = 0; i < names_length; i++) {
    text +=
      "\n Hi " +
      names[i] +
      "! Sorry For inconvenience, But due to limited space you can’t be invited :(.";
    names.splice(names[i], 1);
  }
  return text;
}
function final_invitation(names_length, names) {
  text = "";
  console.log(names_length);
  for (let i = 0; i < names_length; i++) {
    text += "\n Hi " + names[i] + "! Congratulations You are invited :(.";
  }
  return text;
}
