const books = require('./books.json');

function findSmall(pivot,array) {
    let small = 0;

    for(let current = 0; current < array.length; current++){
        let prodCurrent = array[current];

        if ( prodCurrent.cost < pivot.cost){
            small++;
        }
    }

    return small;
}

console.log(findSmall(books[2],books));