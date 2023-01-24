const costBooks = [25, 15, 30, 50, 45, 20];

let cheaper = 0;

for (let current = 0; current < costBooks.length; current++) {
  if (costBooks[current] < costBooks[cheaper]) {
    cheaper = current;
  }
}

console.log(`O livro mais barato custa ${costBooks[cheaper]}`);
