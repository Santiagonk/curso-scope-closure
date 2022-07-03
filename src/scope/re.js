var firstName; // Undefined
firstName = 'Santiago';
console.log(firstName);

var lastName = "David"; // declarar asignar
lastName = 'Ana'; // reasignar
console.log(lastName);

var secondName = "David"; // declarando y asignando
var secondName = "Ana"; // reasignando
console.log(secondName);


// Let
let fruit = 'Apple' // declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log('Kiwi');

let fruit = 'Banana'; // no puedo redeclrar

// const
const animal = 'Dog'; // declara y asigna
animal = 'Cat';
console.log(animal); // no se puede reasignar
const animal = 'Snake';

const vehicles = [];
vehicles.push('Mazda');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);