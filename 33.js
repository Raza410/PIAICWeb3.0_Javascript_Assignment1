let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 0; i < number.length; i++) {
  if (number[i] == 1) {
    console.log(`${number[i]}st`);
  } else if (number[i] == 2) {
    console.log(`${number[i]}nd`);
  } else if (number[i] == 3) {
    console.log(`${number[i]}rd`);
  } else if (number[i] >= 4 && number[i] <= 9) {
    console.log(`${number[i]}th`);
  }
}
