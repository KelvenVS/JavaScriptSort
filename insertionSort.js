const list = require("./publisherFolha.json");

function insertionSort(list) {
  for (let current = 0; current < list.length; current++) {
    let analysis = current;

    //condition to compare the first time "analysis > 0" &&
    //or "let current = 1" in for
    while (analysis > 0 && list[analysis].cost < list[analysis - 1].cost) {
      //save variables
      let analyzedItem = list[analysis];
      let previousItem = list[analysis - 1];

      //swap variables
      list[analysis] = previousItem;
      list[analysis - 1] = analyzedItem;

      //parses once and exits while
      analysis--;
    }
  }
  console.log(list);
}

insertionSort(list);
