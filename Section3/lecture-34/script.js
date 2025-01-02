// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`this is rep. 1 ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`this is rep. 1 ${rep}`);
//   rep++;
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

calcAvg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAvg([2, 3, 7]));
console.log(calcAvg(totals));
console.log(calcAvg(tips));
