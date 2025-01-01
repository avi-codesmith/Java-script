const mark = {
  fullName: "Mark Miller",
  mass: 92,
  height: 1.65,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const jhon = {
  fullName: "Jhon Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBMI()); // Both1 are equal...
// console.log(mark.bmi);    // Both1 are equal...

console.log(jhon.calcBMI()); // Both2 are equal...
// console.log(jhon.bmi);    // Both2 are equal...

if (mark.bmi > jhon.bmi) {
  console.log(
    `BMI ${mark.bmi} of ${mark.fullName} is higher than ${jhon.fullName}'s ${jhon.bmi} BMI`
  );
} else if (mark.bmi == jhon.bmi) {
  console.log(`Both BMI is equal ${mark.bmi} = ${jhon.bmi}`);
} else {
  console.log(
    `BMI ${mark.bmi} of ${mark.fullName} is lower than ${jhon.fullName}'s ${jhon.bmi} BMI`
  );
}
