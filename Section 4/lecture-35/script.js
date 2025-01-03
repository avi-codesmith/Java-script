const temp = [3, -5, 4, 45, -3, 9, 6, -6, 19, -13];

const calcTipFunction = (temps) => {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < temps.length; i++) {
    max = Math.max(max, temps[i]);
    min = Math.min(min, temps[i]);
    console.log(
      `Step ${i}: Current Value = ${temps[i]}, Max = ${max}, Min = ${min}`
    );
  }

  return { max, min };
};

const result = calcTipFunction(temp);
console.log("Final Result:", result);
