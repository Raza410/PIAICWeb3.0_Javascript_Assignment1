let current_users = ["alex", "Luke", "Bob", "tony", "Admin", "Mike"];

let new_users = ["jira", "LUKE", "bob", "naty", "bunty"];

for (var i = 0; i < new_users.length; i++) {
  let counter = 0;
  for (var j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLocaleLowerCase()) {
      console.log(`${new_users[i]} will need to enter a new username.`);
      counter = counter + 1;
    }
  }
  if (counter === 0) {
    console.log(`${new_users[i]}the username is available.`);
  }
}
