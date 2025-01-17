"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  const firsrName = "Jonas";
  console.log(firsrName);

  function printAge() {
    let output = `you are the ${age} and you ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear < 1996) {
      var millenial = true;
      const str = `you are a mellenial, ${firsrName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = "NEW OUTPUT!";
      console.log(add(2, 3));
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

calcAge(1991);
