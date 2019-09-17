/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use 
 * variables. Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another
 *data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name 
 *(id or alias) for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and 
 *initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because 
 * we have NOT initialized it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var, let, const //
var name = 'Bob'
let friend = 'Bob'
const mom = 'Bob'
// NOTE: Some formatting rules require that a constant be all uppercase. 
// Ex. const BOB_ROSS = 'Bob'

/* Var is used to declare a variable, which you then assign a name. It starts out undefined,
 * and can be reassigned at any time. It is function-scoped.
 * Let also has the same function as var. However, let is block-scoped.
 * Const is another one that is block-scoped, but it's different. It must be assigned a variable
 * right away, unlike let and var.
 */
 
 // 5. Hoisting //
 
 /* Hoisting simply means that when a variable is defined, it's declaration gets
  * shoved (hoisted) up to the beginning of the scope.
  * Let and Const is not hoisted.
  */
