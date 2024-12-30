const jonas = {
  firstName: "Jonas",
  lastName: "Sachman",
  age: 2024 - 2011,
  Job: "Teacher",
  friends: ["Rahul", "Rohit", "Viki"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
