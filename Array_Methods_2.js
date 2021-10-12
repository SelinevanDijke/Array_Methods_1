// A
const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
const findSpiderMan = superheroes.find(function (element) {
    return element.name === "Spiderman"; 
});
console.log(findSpiderMan); 

// B
// For each
const doubleArrayValues = ([1, 2, 3]);
doubleArrayValues.forEach(element => console.log(element * 2));

// Map method
const mapArrayValues = doubleArrayValues.map(x => x * 2);
console.log(mapArrayValues); 

// C
const containsNumberBiggerThan10 = ([1, 4, 3, 6, 9, 7, 11]);
// const containsNumberBiggerThan10 = ([1, 2, 1, 2, 1, 2]);
const checkIfNumberIsBiggerThan10 = (element) => element > 10;
console.log(containsNumberBiggerThan10.some(checkIfNumberIsBiggerThan10));

// D
const isItalyInTheGreat7 = (['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']);
const checkIfItalyIsInTheGreat7 = (element) => element === 'Italy';
console.log(isItalyInTheGreat7.some(checkIfItalyIsInTheGreat7));  

// E
const times10 = [1, 4, 3, 6, 9, 7, 11];
times10.forEach(element => console.log(element * 10));
// console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

// F
const isBelow100 = (currentValue) => currentValue > 100;
const array100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
console.log(array100.every(isBelow100));
// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))

// G - Bonus opdracht
const array1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array1.reduce(reducer));

