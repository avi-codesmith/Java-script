const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (96 + 108 + 89) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins has won :D");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas has won :D");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Match has draw :(");
}
