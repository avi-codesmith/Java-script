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

const interestedIn = prompt(
  "What you want to know about Jonas? choose any one option Firstname, Lastname, Age, Job, Friends."
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Something went wrong, Choose option again");
  prompt(
    "What you want to know about Jonas? choose any one option Firstname, Lastname, Age, Job, Friends."
  );
}

jonas.location = "portugal";
jonas["twitter"] = "@jonassachman";
console.log(jonas);

console.log(
  `${jonas.firstName} ${jonas.lastName} has 3 friend ${jonas.friends} , the is best friend is ${jonas.friends[0]}.`
);
