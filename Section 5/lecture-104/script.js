"use strict";

const newFunc = () => {
  const variable = "x";
  const innerFunc = () => {
    console.log(variable);
  };
  innerFunc();
};

newFunc();
