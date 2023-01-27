// const { booksFolha, booksGalho,} = require("./publisherFolha.json", "./publisherGalho");

// const booksFolha = require("./publisherFolha.json");
// const booksGalho = require("./publisherGalho.json");

const { edFolha, edGalho } = require("./arraysExample.js");

function arrayBooks(list1, list2) {

  let listFinal = [];
  let positionCurrentList1 = 0;
  let positionCurrentList2 = 0;
  let current = 0;

  while (positionCurrentList1 < list1.length && positionCurrentList2 < list2.length) {
    let prodCurrentList1 = list1[positionCurrentList1];
    let prodCurrentList2 = list2[positionCurrentList2];
    console.log(`comparando ${positionCurrentList1.titulo} com ${positionCurrentList2.titulo}`);

    if (positionCurrentList1.preco < positionCurrentList2.preco) {
      listFinal[current] = prodCurrentList1;
      positionCurrentList1++;
    } else {
      listFinal[current] = prodCurrentList2;
      positionCurrentList2++;
    }
    current++;
  }

  return listFinal;
}

console.log(arrayBooks(edFolha, edGalho));
// console.log(arrayBooks(booksFolha, booksGalho));
