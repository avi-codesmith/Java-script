const age = 18;
if (age === 18) console.log("you can became an adult");

let favors = Number(prompt("what is your favourite number?"));
console.log(favors);

if (favors === 1) {
  console.log("Your is the best no. in the world!");
} else if (favors < 1) {
  console.log("Negative numbers are also good!");
} else if (favors === 100) {
  console.log("100 number is cool :)");
} else {
  console.log("Not a good number, you are a joker :o)");
}

if (favors !== 1) {
  console.log("Why not 1 ?");
}
