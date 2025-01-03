const calcAvg = (a, b, c) => (a + b + c) / 3;
console.log(calcAvg(3, 4, 5));

let scoreDolphins = calcAvg(44, 23, 71);
let scoreKoalas = calcAvg(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checWinner = function (avgKoalas, avgDolphins) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins has won :D (${avgDolphins} VS ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas has won :D (${avgDolphins} VS ${avgKoalas})`);
  } else {
    console.log("no one has not won :(");
  }
};

checWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAvg(85, 54, 41);
scoreKoalas = calcAvg(23, 23, 27);
console.log(scoreDolphins, scoreKoalas);
checWinner(scoreDolphins, scoreKoalas);
