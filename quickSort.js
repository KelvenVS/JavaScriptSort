const books = require("./books.json");
const swapSpot = require("./findSmall"); //swapSpot funciton

function quickSort(array, left, right) {
  if (array.length > 1) {
    let currentIndex = partition(array, left, right);
    if (left < currentIndex - 1) {
      quickSort(array, left, currentIndex - 1);
    }
    if (currentIndex < right) {
      quickSort(array, currentIndex, right);
    }
  }
  return array;
}

function partition(array, left, right) {
  console.log(`array`, array);
  console.log(`left, right` , left, right);
  let pivot = array[Math.floor((left + right) / 2)];
  let currentLeft = left; //0
  let currentRight = right; //books.length - 1

  while (currentLeft <= currentRight) {
    while (array[currentLeft].cost < pivot.cost) {
      currentLeft++;
    }
    while (array[currentRight].cost > pivot.cost) {
      currentRight--;
    }
    if (currentLeft <= currentRight) {
      swapSpot(array, currentLeft, currentRight);
      currentLeft++;
      currentRight--;
    }
  }
  return currentLeft;
}

console.log(quickSort(books, 0, books.length - 1));