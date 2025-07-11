// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`this is rep. 1 ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`this is rep. 1 ${rep}`);
//   rep++;
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// calcAvg = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// };

// console.log(calcAvg([2, 3, 7]));
// console.log(calcAvg(totals));
// console.log(calcAvg(tips));

// setTimeout(() => {
//   const myArray = ["Ramesh1", "BOB2", "Rober3", "Parker4"];
//   const splice = myArray.splice(0, 2);
//   console.log(splice);
//   const sclice = myArray.slice(0, 2);
//   console.log(sclice);
//   console.log(myArray);
// }, 10);

// const marvel = ["Thos", "Bulk", "Plastic man", "Beeman"];
// const comik = ["Nagraj", "Shaktiman", "Mad", "Chuha"];

// const allHero = marvel.concat(comik);

// console.log(allHero);

// const mySet = "Bouncewillcoverparle";
// const myRole = "How to get it";
// const myGoal = "I will eat parle any how";
// const myArray = Array.of(mySet, myRole, myGoal);
// console.log(myArray);

const mySymbol = Symbol("keyfirst");

const object = {
  hi: "kaise",
  bye: "kyon",
  againHI: "kyon",
  [mySymbol]: "why",
  needFre: "Freeze",
};
console.log(object);

Object.freeze(object);
console.log(object.needFre);
object.needFre = "Need Fire";
console.log(object.needFre);
