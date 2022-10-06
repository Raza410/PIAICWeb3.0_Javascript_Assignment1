function make_shirt(sizeOfShirt, message) {
  return `size of your shirt is: ${sizeOfShirt}` + `\n message: ${message}`;
}
shirtSize = 12;
firstName = "Ahmed ";
lastName = "Raza";

// make_shirt(15,"Hello world");

console.log(make_shirt(15, "Hello world"));
console.log(print_shirt(shirtSize, "Hi Web.3.0", firstName, lastName));

function print_shirt(shirtSize, message, firstName, lastName) {
  return (
    "First Name: " +
    firstName +
    "Last Name: " +
    this.lastName +
    " Shirt Size " +
    shirtSize +
    " Message:" +
    message
  );
}
