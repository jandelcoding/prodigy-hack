function grantFreeMembership(user) {
  user.isMember = true;
  console.log(`${user.name} has been granted free membership!`);
  
  setTimeout(() => {
    user.isMember = false;
    console.log(`${user.name}'s free membership has expired.`);
  }, 1000); // 1000 milliseconds = 1 second
}

// Example usage:
const user = { name: "Alice", isMember: false };
grantFreeMembership(user);
// Alice has been granted free membership!
// ...after 1 second...
// Alice's free membership has expired.
