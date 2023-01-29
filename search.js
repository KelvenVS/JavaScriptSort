const books = require ('./booksOrder.json');

function search(array , of , until , searchValue) {
    const mid = Math.floor((of + until) / 2);
    const current = array[mid];
    
    if (searchValue === current.cost){
        return mid;
    }

    if (searchValue < current.cost){
        return search(array , of , mid - 1 ,searchValue);
    }
    if (searchValue > current.cost){
        return search(array , mid + 1 , of ,searchValue);
    }
}

//(array,first item,array.length - 1,search value)
console.log(search(books, 0, books.length - 1, 40));