// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

function recursion (base,expo){
    return expo === 1 ? base : base * recursion(base,expo - 1)
    }
    console.log(recursion(8,2))

// 2. Write functions min and max that will find min and max number in array using apply

const array = [1,2,3,4,100,30]; 

let min = (arr) => Math.min.apply(null,arr),
    max = (arr) => Math.max.apply(null,arr);

console.log(min(array));
console.log(max(array));

 //the same decision

let min2 = (arr) => Math.min(...arr),
    max2 = (arr) => Math.max(...arr);

console.log(min2(array));
console.log(max2(array));

// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, brand and color. 
//    Please make examples for three different cars

function displayCarDetails(ownerName){
    return `The registration number is ${this.registNum},car brand is ${this.carBrand} and car color is ${this.carColor}.
            Owner of this car is ${ownerName}`
    };

const bmw = {
    registNum: 6823,
    carBrand:'BMW',
    carColor:'white'
};
const volvo = {
    registNum: 2213,
    carBrand:'Volvo',
    carColor:'blue'
};
const audi = {
    registNum: 4423,
    carBrand:'Audi',
    carColor:'black'
};

displayCarDetails.call(bmw,'Vitaliy');
displayCarDetails.call(volvo,'Anna');
displayCarDetails.call(audi,'Roman');

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 
 
// function greet (person) {
//   if (person.name ==  'amy' ) {
//     return 'hey amy'
//   } else {
//     return 'hey arnold'
//   }
// }
// const amy = {name: 'amy'}
// greet(amy)
 

/* code will log out 'hey amy' anyway in this case. 
The difference will make sense, if the name field will be '1' and we will compare it using == with 1. 
In that case it will return a boolean 'true' value. 
But if we will compare it with === it will return the boolean 'false' because of boxing */


// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
for (var i = 0; i < 4; i++) {
console.log(i)
}
