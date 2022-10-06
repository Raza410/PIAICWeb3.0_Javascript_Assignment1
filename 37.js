shirtSize = 12;
firstName = "Ahmed ";
lastName = "Raza";

shirtSize = "";

function make_shirt(sizeOfShirt, message) {
  if (sizeOfShirt == "") {
    sizeOfShirt = "medium";
  }
  if (sizeOfShirt == "medium" || sizeOfShirt == "large") {
    return (
      `size of your shirt is: ${sizeOfShirt}` + `\n message: I love JavaScript`
    );
  } else {
    return (
      `size of your shirt is: ${sizeOfShirt}` +
      `\n message: Other Sizes Then Larges and medium`
    );
  }
}

// make_shirt(15,"Hello world");

console.log(make_shirt(shirtSize, "Hello world"));
