const books = require("./books.json");

function mergeSort(array) {

  if (array.length > 1) {
    const mid = Math.floor(array.length / 2);
    const part1 = mergeSort(array.slice(0, mid));
    const part2 = mergeSort(array.slice(mid, array.length));
    array = order(part1, part2);
  }
 
  return array;
}

function order(part1, part2) {
  let positionCurrentPart1 = 0;
  let positionCurrentPart2 = 0;
  const result = [];

  while (
    positionCurrentPart1 < part1.length &&
    positionCurrentPart2 < part2.length
  ) {
    let prodCurrentPart1 = part1[positionCurrentPart1];
    let prodCurrentPart2 = part2[positionCurrentPart2];

    if (prodCurrentPart1.cost < prodCurrentPart2.cost) {
      result.push(prodCurrentPart1); // swap to end
      positionCurrentPart1++;
    } else {
      result.push(prodCurrentPart2);
      positionCurrentPart2++; // swap to end
    }
  }
    return result.concat(
      positionCurrentPart1 < part1.length
        ? part1.slice(positionCurrentPart1)
        : part2.slice(positionCurrentPart2)
    );
}

console.log(mergeSort(books));

