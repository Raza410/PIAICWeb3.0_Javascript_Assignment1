var myarray = [
  { "the Great ": "Raza" },
  { "the Great ": "Talha" },
  { "the Great ": "Abdullah" },
];

for (var i = 0, l = myarray.length; i < l; i++) {
  var items = myarray[i];
  var keys = Object.keys(items);
  for (var j = 0, k = keys.length; j < k; j++) {
    console.log(magicans(keys[j], items[keys[j]]));
  }
}
function magicans(name, text) {
  return `"${name}, ${text}"`;
}
