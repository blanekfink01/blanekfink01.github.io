/*
 * DATATYPES:
 *
 * 0. There are different datatypes that have different uses and functions.
 */
 
// 1. Number //
var num1 = 1;
var num0 = 0;
var numNeg = -1;
var numDec = -0.1415;
// Any real number is a JavaScript number //

// 2. String //
var name = 'dog';
var bed = 'floor';
var owner = 'Bob';
var treats = '7';
// Any series of words or letters, and non-reserved characters between
// either quotation marks or apostrophes is a string
console.log(name[0]); // ==> 'd'
// You may reference any character in a string using bracket notation

// 3. Boolean //
var trueBoolean = true;
var faleBoolean = false;
// A boolean is a value that is either true or false //

// 4. Array //
var array = [];
var array = [1, 2, 3 , 4];
var array = [1, 'two', 3, 'four'];
// Arrays are lists that store values. They are accessed by reference 
// with either bracket or dot notation

// 5. Object //
var object = {};
var object = {
    key: value,
    password: 'kittenpoptarts',
    balance: 12.56
}
// An object stores values in key value pairs. They are accessed with dot
// or bracket notation, but new valus are only added with bracket notation.
// They are colon-separated pairs that are comma-separated

// 6. Function //
var addition = function(x, y) {
    return x + y;
}
/**
 * A function is declared with the keyword 'function'.
 * It can be assigned to a variable, and must be in order to be called by name
 * a function can reassign a variable within or above its scope.
 * If a variable is redeclared, it does not affect the variable in the higher 
 * scope. 
 * When you have a 'return' statement, the function call will equal that value
 * once the function ends, otherwise the function call equals undefined.
 **/
 var sum = addition(2, 3);
 console.log(sum); // ==> 5
 
// 7. Undefined //
// Undefined is an assignable keyword that represents any undefined value.
// Things that simply do not have an assigned value will equal this value.

// 8. Null //
// Null is similar to undefined in the sense that you can assign it to something
// no make it equal nothing.
// However, null represents the intentional absence of any value

// 9. NaN //
// A value that means NaN. It is returned when Math functions fail.
//You can test for it using Number.isNaN() or isNaN()

// 10. Infinity and -Infinity //
console.log(Infinity          ); /* Infinity */  
console.log(Infinity + 1      ); /* Infinity */  
console.log(Math.pow(10, 1000)); /* Infinity */  
console.log(Math.log(0)       ); /* -Infinity */  
console.log(1 / Infinity      ); /* 0 */

// 11. What is the difference between primitive/simple and complex data types? //
/**
 * Primitive values are finite and consist of numbers, strings, booleans,
 * undefined, null, NaN, and infinity (it represents a number greater
 * than any other number, but it's finite because the computer doesn't
 * actually stores infinity, just a representation with the same mechanics)
 * 
 * Complex datatypes consist of objects, arrays, and functions. 
 * They are theoretically infinite in size, and different aspects of them
 * can be changed independently.
 **/

// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different? //
/**
 * Primitive values are accessed through a created copy of the value.
 * If you input the variable names for 1 and 'dog' into a function, it will copy
 * the values 1 and 'dog' from the variables then pass those to the function.
 * 
 * However, complex datatypes are accessed through reference, when you
 * pass a complex object, you are really just passing where to look
 * when you want to access the value.
 **/











