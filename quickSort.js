const books = require('./books.json');

function quickSort(array,left,right) {
  if(array.length > 1) {
    let varTemp = partition(array,left,right);
  }

  return array;
}

function partition(array,left,right) {
  let pivot = array[Math.floor((left+right)/2)];
  return pivot;
}

console.log(quickSort(books,0,books.length - 1))