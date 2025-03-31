// "use strict";

function newFunc() {
  const variable = "x";
  function innerFunc() {
    console.log(variable);
  }
}
innerFunc();

newFunc();
