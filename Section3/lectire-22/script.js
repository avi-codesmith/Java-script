function cutFruitPieces(fruits) {
  return fruits * 4;
}

function fruitBasket(orange, mango, papaya) {
  const mangoPieces = cutFruitPieces(mango);
  const orangePieces = cutFruitPieces(orange);
  const papayaPieces = cutFruitPieces(papaya);

  const juice = `Fruits with ${orangePieces} piece of orange, ${mangoPieces} piece of mango and ${papayaPieces}  pieces of papaya.`;
  return juice;
}

console.log(fruitBasket(2, 1, 2));
