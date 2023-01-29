const books = require("./books.json");

function findSmall(pivot, array) {
  let small = 0;

  for (let current = 0; current < array.length; current++) {
    let prodCurrent = array[current];

    if (prodCurrent.cost < pivot.cost) {
      small++;
    }
  }

  swapSpot(array, array.indexOf(pivot), small);
  return array;
}

function swapSpot(array, of, to) {
  //save
  const elem1 = array[of];
  const elem2 = array[to];

  //swap
  array[to] = elem1;
  array[of] = elem2;
}

function centerOfArray(array) {
  // find pivot in array
  let pivot = array[Math.floor(array.length / 2)];
  console.log(pivot);
  //call function
  findSmall(pivot, array);

  let smallValues = 0;
  for (let analysing = 0; analysing < array.length; analysing++) {
    let current = array[analysing];

    if (current.cost <= pivot.cost && current !== pivot) {
      swapSpot(array, analysing, smallValues);
      smallValues++;
    }
  }

  return array;
}

// console.log(findSmall(books[2], books));
console.log(centerOfArray(books));

module.exports = swapSpot;