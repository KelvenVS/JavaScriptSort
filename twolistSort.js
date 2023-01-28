const booksFolha = require("./publisherFolha.json");
const booksGalho = require("./publisherGalho.json");

function arrayBooks(list1, list2) {
  let listFinal = [];
  let positionCurrentList1 = 0;
  let positionCurrentList2 = 0;
  let current = 0;

  while (positionCurrentList1 < list1.length && positionCurrentList2 < list2.length) {
    let prodCurrentList1 = list1[positionCurrentList1];
    let prodCurrentList2 = list2[positionCurrentList2];
    console.log(`comparando ${list1[positionCurrentList1].title} com ${list2[positionCurrentList2].title}`);

    if (prodCurrentList1.cost < prodCurrentList2.cost) {
    positionCurrentList1++;
      listFinal[current] = prodCurrentList1;
    } else {
      positionCurrentList2++;
      listFinal[current] = prodCurrentList2;
    }
    current++;
  }

  while (positionCurrentList1 < list1.length) {
    listFinal[current] = list1[positionCurrentList1];
    positionCurrentList1++;
    current++;
  }
  while (positionCurrentList2 < list2.length) {
    listFinal[current] = list2[positionCurrentList2];
    positionCurrentList2++;
    current++;
  }

  return listFinal;
}

console.log(arrayBooks(booksGalho,booksFolha,));

//swap-only algorithm, the list was already sorted

// The values ​​stored in the variables positionCurrentList1, positionCurrentList2, prodCurrentList1 and prodCurrentList2 are, respectively: numerical value referring to the current index of the first list (received by the function via parameter); numerical value referring to the current index of the second list (received by the function via parameter); an object with title and price properties, referring to the element contained in the current index of the first list; an object with title and price properties, referring to the element contained in the current index of the second list.