const arrProducts = require("./publisherFolha.json");
//console.log(books);

//                 any array
function lowerCost(arrProducts, startPosition) {
  let cheaper = startPosition;
  for (let current = startPosition; current < arrProducts.length; current++) {
    if (arrProducts[current].cost < arrProducts[cheaper].cost) {
      cheaper = current;
    }
  }
  return cheaper;
}

module.exports = lowerCost;


// let cheaper = 0;
// for (let current = 0; current < books.length; current++) {
//   if (books[current].cost < books[cheaper].cost) {
//     cheaper = current;
//   }
// }
// //console.log(books[1].title);
// console.log(
//   `O livro mais barato é o ${books[cheaper].title} e custa ${books[cheaper].cost} reais`
// );
// //26/01/2023

