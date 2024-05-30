// Arrays

// creation by simply assigning literals 
// let arr = []

let groceryList = ['eggs' , 'breads', 'butter'];

// by using the array constructor 
// syntax : new Array(param)
// param can be length or the elements that we want to store in our array
let arr1  = new Array(3);
console.log(arr1.length) // 3

let arr2 = new Array('honey','butter','bread')
console.log(arr2) // [honey , butter , bread]

// accessing the element of the array 
console.log(arr2[2]) // bread 
console.log(arr2[arr2.length-1]) // bread 

// adding an element in array 
// push 

const arr = [1,2,3,4];
arr.push(5)
console.log(arr) //[ 1, 2, 3, 4, 5 ]
// unshift 
arr.unshift(0) ; 
console.log(arr) //[ 0,1, 2, 3, 4, 5 ]

// both the methods above also return the length of the new array

// also we can push more than one elements together in array 
arr.push(6,7,8)
console.log(arr) //[ 1, 2, 3, 4, 5 , 6, 7, 8 ]
// unshift works in same manner


// removing an element from array 

// pop
// ['eggs' , 'breads', 'butter']; is grocey list 
let popedItem = groceryList.pop();
console.log(popedItem); //butter
console.log(groceryList) //[ 'eggs', 'breads' ]

popedItem = groceryList.shift();
console.log(popedItem); //egg
console.log(groceryList) //['breads' ]

//----------------------------------------------------------
// HOW TO COPY AND CLONE AN ARRAY IN JS 
// can be done with the help of slice method -> it creates a shallow copy 
// -> it does not changes the original array 
// Shallow copy in javascript is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied

// slice() -> returns a new array which is a shallow copy of the original array
groceryList = [ 'egg', 'butter', 'bread', 'cereals', 'rice' ]

let sCopy = groceryList.slice()

console.log(sCopy) // [ 'egg', 'butter', 'bread', 'cereals', 'rice' ]
console.log(groceryList) // [ 'egg', 'butter', 'bread', 'cereals', 'rice' ]

//--------------------------------------------------------
