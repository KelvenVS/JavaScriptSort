const books = require('./books.json');

function findSmall(pivot,array) {
    let small = 0;

    for(let current = 0; current < array.length; current++){
        let prodCurrent = array[current];

        if ( prodCurrent.cost < pivot.cost){
            small++;
        }
    }

   swapSpot(array, array.indexOf(pivot) , small);
   return array;
}

function swapSpot(array, of , to){
    //save
    const elem1 = array[of];
    const elem2 = array[to];

    //swap
    array[to] = elem1;
    array[of] = elem2;

}

console.log(findSmall(books[2],books));