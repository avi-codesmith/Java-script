const calctip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 55, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
console.log(bills, tips);
