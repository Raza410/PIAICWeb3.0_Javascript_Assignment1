var let = ["Pakistan", "United Kingdom", "Canada", "Lyari", "Faizabad"];
console.log("Printed our array array in its original order.");
console.log(locations);
locations_sort = locations;
console.log(
  "Print your array in alphabetical order without modifying the actual list."
);
// console.log(locations.sort());

console.log(locations.slice(0).sort());

console.log(
  "Show that your array is still in its original order by printing it."
);
console.log(locations_sort);

console.log(
  "Print your array in reverse alphabetical order without changing the order of the original list."
);
console.log(reversealphabeticalOrder(locations.slice(0)));

console.log(
  "Show that your array is still in its original order by printing it."
);
console.log(locations_sort);

console.log(
  "Reverse the order of your list. Print the array to show that its order has changed"
);
var reverse_sorted = locations.slice(0).reverse();
console.log(reverse_sorted);

console.log(
  "Reverse the order of your list again. Print the list to show it’s back to its original order."
);
console.log(reverse_sorted.slice(0).reverse());

console.log(
  "Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed."
);
console.log(reverse_sorted.slice(0).sort());

final_arr = reverse_sorted.slice(0).sort();

console.log(
  "Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed."
);
console.log(reversealphabeticalOrder(final_arr.slice(0)));

function reversealphabeticalOrder(arr) {
  return arr.sort((a, b) => (a > b ? -1 : 1));
}
