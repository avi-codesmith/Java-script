function fruitBasket(orange, mango, papaya) {
  console.log(orange, mango, papaya);
  const juice = `juice with ${orange} orange, ${mango} mango and ${papaya} papaya.`;
  return juice;
}

const fruitJuice = fruitBasket(5, 6, 4);
console.log(fruitJuice);
console.log(fruitBasket(2, 3, 1));
