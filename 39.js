var myarray = [{'Karachi': 'Pakistan'}, {'Dhaka': 'Bangladesh'}, {'Paris': 'France'}];

for (var i = 0, l = myarray.length; i < l; i++) {
    var items = myarray[i];
    var keys = Object.keys(items);
    for (var j = 0, k = keys.length; j < k; j++) {
        console.log(city_country(keys[j],items[keys[j]]));
    }
}
function city_country(city_name,country){
        return `"${city_name}, ${country}"`;
}
