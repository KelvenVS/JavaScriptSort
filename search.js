const books = require ('./booksOrder.json');

function search(array , of , until , searchValue) {
    console.log(`of , until` , of , until);

    const mid = Math.floor((of + until) / 2);
    const current = array[mid];
    
    if (typeof searchValue !== 'number'||of == array.length || until == -1){
        stringError = `Valor ${searchValue} não foi encontrado!!!`
        return stringError;
    }
    
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
console.log(search(books, 0, books.length - 1, 5));
console.log(search(books, 0, books.length - 1, 40));
console.log(search(books, 0, books.length - 1, "a"));