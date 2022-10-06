var usernames = ["admin", "guest", "test", "user", "moderator"];
usernames.forEach((username) => {
  if (username == "admin") {
    console.log(`Hello admin, would you like to see a status report?`);
  } else if (username == "test") {
    console.log(`Hello ${username}, thank you for logging in again `);
  } else if (username == "user") {
    console.log(`Hello ${username}, thank you for logging in again `);
  } else if (username == "moderator") {
    console.log(`Hello ${username}, thank you for logging in again `);
  } else if (username == "guest") {
    console.log(`Hello ${username}, thank you for logging in again `);
  }
});
