const jonas = [
  "Jonas",
  "Sachman",
  2037 - 1991,
  "teacher",
  ["Ravi", "Kamal", "Goswami"],
];

// Iterate through the array and log its elements
for (let i = jonas.length - 1; i >= 0; i--) {
  document.write(`${i}: ${jonas[i]}`);
  document.write("<br>");
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------STARTING EXERCISE ${exercise}:-)`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} :-D`);

    for (let good = 1; good <= 3; good++) {
      console.log(`${rep}- ${good}: This is good exercise`);
    }
  }
}
