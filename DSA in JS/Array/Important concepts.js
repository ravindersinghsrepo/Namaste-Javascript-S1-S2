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

// searching a value in array in js 

// indexOf method
groceryList = [ 'egg', 'butter', 'bread', 'cereals', 'rice' , 'bread' ]
console.log(groceryList.indexOf('bread')) // 2 (bread is ar 2nd index i.e its first occurance)
console.log(groceryList.indexOf('peanut')) // -1 (non existent)

// find method -> takes a cb function and the 1st item that satisfies the condition  in b function is returned 

arr2 = [121 , 33, 17,161, 15 , 181]
const evenElement = arr2.find((item)=>item%2==0)
console.log(evenElement) // 12 (0th element is even element)
// undefined is returned if no element is found that satisfies the condition 


// includes() method 
// syntax -> arr.includes(searchElement , fromIndex)
// returns true if searchELement is present in the arr else it returns false 

let vowel = ['a','e','i','o','u']; 
console.log(vowel.includes('a')); // true 


// filter method is used to find all the elements that match the given condition . 

arr2 = [12 , 13 , 14 , 15 , 16 , 17];
filteredArray = arr2.filter((elem,ind)=>{
    return elem%2==0;
})
console.log(filteredArray) // [ 12, 14, 16 ]