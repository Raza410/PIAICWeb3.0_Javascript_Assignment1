const name = "Ahmed raza";

function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  return str.join(" ");
}

console.log("Lower Case", name.toLowerCase());
console.log("Upper Case", name.toUpperCase());
console.log("Title Case", titleCase(name));
