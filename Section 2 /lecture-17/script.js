const day = "thursday";
console.log(day);

if (day === "monday") {
  console.log("aaj mujhe week ki planing krni hai");
} else if (day === "tuesday") {
  console.log("aaj mujhe first page banana hai");
} else if (day === "wednesday" || day === "thursday") {
  console.log("aaj mujhe dusra page banana hai");
} else if (day === "saturday" || day === "sunday") {
  console.log("aaj chutti hai :)");
} else {
  console.log("Write Valid day!");
}

const age = 24;
age >= 25
  ? console.log("You may drink wine :)")
  : console.log("You can not drink wine :(");

const drink = age >= 25 ? "allowed :)" : "don't allowed :(";
console.log(drink);

if (age >= 25) {
  console.log("Allowed :)");
} else {
  console.log("Not allowed :(");
}

console.log(
  `I like to drink ${age >= 25 ? "allowed :)" : "don't allowed :("} `
);
