const friends = ["Ravi", "Rohit", "kavi"];
console.log(friends);
const years = new Array(1991, 1994, 1980, 2008);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Avi";
friends[1] = "Ansh";
friends[0] = "Arpit";

console.log(friends);

const firstName = "Avi";
const avi = [firstName, "Dixit", 2024 - 2011, "student", friends];
console.log(avi);
console.log(avi.length);

const calcAge = function (birthyear) {
  return 2024 - birthyear;
};

const year = [1990, 1991, 2001, 2002, 2004];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[year.length - 1]),
];
console.log(ages);
