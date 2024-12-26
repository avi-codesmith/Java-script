const massMark = 78;
const heightMark = 1.95;
const massJhon = 78;
const heightJhon = 1.95;

const BMIMark = (heightMark / massMark) ** 2;
console.log(BMIMark);

const BMIJhon = (heightJhon / massJhon) ** 2;
console.log(BMIJhon);

const BMIAvg = (BMIJhon + BMIMark) / 2;
console.log(BMIAvg);

if (BMIMark > BMIJhon) {
  console.log("BMIMark is Higher Than BMIJhon.");
} else if (BMIMark == BMIJhon) {
  console.log("Both BMI is equal");
}
if (BMIMark < BMIJhon) {
  console.log("BMIJhon is Higher Than BMIMark.");
}
