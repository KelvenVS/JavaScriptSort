const books = require("./listBook.json");
//console.log(books);

let cheaper = 0;
for (let current = 0; current < books.length; current++) {
  if (books[current].cost < books[cheaper].cost) {
    cheaper = current;
  }
}

//console.log(books[1].title);
console.log(
  `O livro mais barato é o ${books[cheaper].title} e custa ${books[cheaper].cost} reais`
);
