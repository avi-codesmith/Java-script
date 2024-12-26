const bill = 48;
const tip = bill >= 50 && bill <= 300 && bill <= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `bill was ${bill}, the tip was ${tip}, then the total is ${bill + tip}`
);

let bill2 = 49;
let GST = bill * 0.2;

if (bill2 >= 50) {
  console.log(GST);
} else if (bill2 < 50) {
  console.log((GST = 0));
}

console.log(
  `The bill is ${bill}, the GST is ${GST}, the total is ${bill + GST}...`
);
