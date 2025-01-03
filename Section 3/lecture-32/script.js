for (let cl = 1; cl <= 12; cl++) {
  console.log(`I am in class ${cl} in kids corner.`);
}

const jonas = [
  "jonas",
  "sachman",
  2037 - 1991,
  "teacher",
  ["Ravida", "Tapuda", "Godida"],
  true,
  false,
];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
