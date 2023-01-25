//Selection sort

const books = require("./listBook.json");
const lowerCost = require("./lowercost.js");

//Orderning Array Books
for (let current = 0; current < books.length; current++) {
  let smallPrice = lowerCost(books, current);

  //save variables
  let currentBook = books[current];
  //   console.log(`Posição atual: `, current);
  //   console.log(`Livro Atual: `, books[current]);

  let lowerCostBook = books[smallPrice];
  //   console.log(`Livro Menor Preço: `, books[smallPrice]);

  //swap variables
  books[current] = lowerCostBook;
  books[smallPrice] = currentBook;
}

// books.forEach((book,indice) => {
//     let smallPrice = lowerCost(books,indice);
//     //save variables
//     let currentBook = books[indice];
//     let lowerCostBook = books[smallPrice];

//      //swap variables
//     books[indice] = lowerCostBook;
//     books[smallPrice] = currentBook;
// })

console.log(books); //orderly
