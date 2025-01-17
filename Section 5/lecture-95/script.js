"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  const firsrName = "Jonas";
  console.log(firsrName);

  function printAge() {
    const output = `you are the ${age} and you ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

calcAge(1991);
