city_names = ["Kharachi", "Faislabad", "Islamabad", "Makkah"];
var country = "Pakistan";

function describe_city(city_name, country) {
  if (city_name == "Makkah") {
    return `${city_name} is not in  ${country}`;
  } else {
    return `${city_name} is in  ${country}`;
  }
}
city_names.forEach((city) => {
  console.log(describe_city(city, country));
});
