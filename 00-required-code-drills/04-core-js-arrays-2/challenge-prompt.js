// declare a variable named ourArray and assign an empty array to it
var ourArray = [];


// we can `push` values into an array with the push method. Documentation can be found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// Let's push the number 1 into ourArray
ourArray.push(1);

// push the string "hello" into ourArray
ourArray.push("hello");

// push the boolean false into ourArray
ourArray.push(false);

// push the number 84 into ourArray
ourArray.push(84);

// push the string "world" into our Array
ourArray.push("world");

// console log ourArray
console.log(ourArray);


// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 1--------------------------");

// declare a variable named oneToTen and assign it an array containing the numbers from 1 to 10
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console log the element at index 4
console.log(oneToTen[4]);

// console log the element at index 7
console.log(oneToTen[7]);



// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 2--------------------------");

// We've declared this array for you
var numArray = [2, 65, 3, 7, 39, 22, 11, 94, 299, 9, 20, 21, 51, 37];
// iterate through numArray and create an individual console log for every number greater than 50

for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] > 50) {
    console.log(numArray[i]);
  }
}


// this didn't work:
// numArray.forEach( > 50 { 
//   console.log(thisValue);
// });

// and this didn't work:
// numArray.forEach(overFifty() {
//   function overFifty { 
//     if this > 50 
//     console.log(this)
//   }  
// });


// iterate through numArray and create an alert that tells us 
// the index of all the occurances of the number 11

for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] === 11) {
    alert("We found an 11 at index #"+i);
  }
}

// iterate through numArray and console log the sum of all the numbers
var sum = 0;
for (var i = 0; i < numArray.length; i++) {
  sum = sum + numArray[i];
}
console.log("sum of all numbers = " + sum);


// iterate through numArray and console log the sum of all the numbers greater than 50
var overFiftySet = [];
var sumOverFifty = 0;
for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] > 50) {
    overFiftySet.push(numArray[i]);
  sumOverFifty = sumOverFifty + numArray[i];
  }
}
console.log(overFiftySet);
console.log("sum of all numbers over 50 = " + sumOverFifty);

// iterate through numArray and console log the sum of all the even numbers
var evenNums = [];
var sumOfEvens = 0;
for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] % 2) {
    sumOfEvens = sumOfEvens + numArray[i];
  }
}
console.log("Sum of all even numbers = " + sumOfEvens);

// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 3--------------------------");

// We've declared this array for you
var fruits = [
  "Apple", "Orange", "Banana", "Pomelo", "Apple", "Kiwi", "Peach", "Banana", "Grape", "Tomato", 
  "Kiwi", "Apple", "Watermelon", "Lemon", "Pomelo", "Apple", "Banana", "Peach", "Apricot", "Grape"];
// iterate through fruits and console log the number of times "Apple" appears in the array

var appleCt = 0;
for (var i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Apple") {
    appleCt++;
  }
}
console.log("Apple Count: " appleCt);

// iterate through fruits and console log the number of times "Peach" appears in the array
var peachCt = 0;
for (var i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Peach") {
    peachCt++;
  }
}
console.log("Peach Count: " + peachCt)

// iterate through fruits and console log the number of fruits that start with "P" in the array



// create a new empty array named uniqueFruits


// iterate through fruits and populate uniqueFruits with only unique values from fruits
// you should a shorter array without repeated values



// console log out your uniqueFruits array




// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 4--------------------------");

// CHALLENGE (Optional!)
// In this challenge we're going to be working with nested arrays. 
// You can store any type of data within an array- even other arrays!
var twoDimArray = [
  [54, 6, 7, 46, 78],
  [43, 9, 6, 65, 65],
  [32, 1, 44, 1, 23],
  [55, 12, 2, 34, 2],
  [2, 12, 44, 2, 12]];
// another seperator for your convenience
console.log("     first array      ");
// iterate through the first array inside twoDimArray and console log all the numbers less than 25



// another seperator for your convenience
console.log("     second array      ");
// iterate through the second array inside twoDimArray and console log all the numbers less than 25



// another seperator for your convenience
console.log("     third array      ");
// iterate through the third array inside twoDimArray and console log all the numbers less than 25



// another seperator for your convenience
console.log("     fourth array      ");
// iterate through the fourth array inside twoDimArray and console log all the numbers less than 25



// another seperator for your convenience
console.log("     fifth array      ");
// iterate through the fifth array inside twoDimArray and console log all the numbers less than 25



// another seperator for your convenience
console.log("     odd numbers      ");
// iterate through twoDimArray and the arrays inside of it and console log all the odd numbers



// another seperator for your convenience
console.log("     sum of multiples of 3      ");
// iterate through twoDimArray and the arrays inside of it and 
// console log the sum of all the numbers that are a multiple of 3


