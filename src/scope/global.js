// variables

var a; // declarando variable a
var b = 'b'; // declarando y asignamos
b = 'bb'; // reasignación
var a = 'aa'; // redeclaración


// Global Scope
var fruit = 'Apple'; // global scope
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; // global
    console.log(country);
}

countries();
console.log(country);