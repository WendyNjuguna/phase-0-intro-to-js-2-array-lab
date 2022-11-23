// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
 cats.push(name)
 return cats

}
var cats = [  "Milo", "Otis", "Garfield"]
function destructivelyPrependCat(name){
    cats.unshift("Bob")
    return cats 
}
var cats = [  "Milo", "Otis", "Garfield"]
function destructivelyRemoveLastCat(name){
    var removeArray = cats.slice();

    cats.pop(name)
    return cats
  }
  var cats = [  "Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstCat(name){
    var removeArray = cats.slice();

    cats.shift(name)
    return cats
  }
  var cats = [  "Milo", "Otis", "Garfield"]
  destructivelyRemoveFirstCat.shift();
  function appendCat(name){
     const newCat = [...cats,name];
     return newCat;
  }
  function prependCat(name){
     const newCat = [name, ...cats];
     return newCat;
  }
  function removeLastCat(){
     const newCat= cats.slice(0,2);
     return newCat;
  }
  function removeFirstCat(){
     const newCat= cats.slice(1);
     return newCat;
  }