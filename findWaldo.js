
function findWaldo(arr, found) {
  arr.forEach()
    if (arr[i] === "Waldo") {
      found(i);
    }
  // }
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
