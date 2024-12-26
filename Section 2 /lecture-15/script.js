const scoreDolphins = (100 + 100 + 100) / 3;
const scoreKoalas = (100 + 100 + 100) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins has won!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas has won!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both are lengend :o");
} else {
  console.log("Match has draw :(");
}
