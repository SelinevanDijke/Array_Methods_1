// A
 const addTheWordCool = function(array) {
  array.push("Cool");
  return array;
};
console.log("Add cool:", addTheWordCool(["Nice", "Awesome", "Tof"]));

// B
const amountOfElementsInArray = function (array) {
    return array.length;
}
console.log(amountOfElementsInArray(['Appels', 'Peren', 'Citroenen'])); 

// C
const selectBelgiumFromBenelux = function (array) {
    return array[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 

// D
const lastElementInArray = function (array) {
    return array[array.length - 1];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
 
// E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

    const impeachTrumpSlice = function(array) {
        return array.slice(1);
    }
    const impeachTrumpSplice = function(array) {
        return array.splice(1);
    }
    console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
    console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F
const stringsTogether = function(array) {
    return array.join(' ');
}
 console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 

 // G
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combineArrays = array1.concat(array2);

console.log(combineArrays);