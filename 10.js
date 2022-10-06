function titleCase(str) {
  str = str.toLowerCase(); //toLowerCase() converts whole string into lower case
  str = str.split(" "); //split the whole string into array where spaces.

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  //return the output by joining the array of strings in to a single string
  return str.join(" ");
}
