const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

//appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

//prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

//removes the last kitten from the kittens array
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

//removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

//appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name){
  var newkittenarray = [...kittens, name];
  return newkittenarray;
}

//prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){
  var newkittenarray = [name,...kittens];
  return newkittenarray;
}

//removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten(){
  
}

//removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten(){
  
}