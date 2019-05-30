

function map(array, func){
  var newArray = [];
  for(i in array){
  newArray.push(func(array[i]))
  }
  return newArray;
}

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

