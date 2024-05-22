// this keyword
'use-strict'
// this keyword behaves differently in different environment 

// this in global space
console.log(this); // window object 
// this keyword in global space represent the global object 
// inside browser global object is different than global object of node js 
// in case of browser the global object is window 
// in node js -> global 

// this inside a function 
function x(){
    //this 
    console.log(this) // window but in strict mode the value of this is undefined  (the value depends on strict and non strict mode )
}
x();

// this in strict mode 

// this substitution 
// acc to this concept  if the value of this is undefined or null , this will be replaced with global object , only in non strict mode 
//:. inside function (non strict mode) -> window
//:. inside function (strict mode) -> undefined 


//this value depends on how this is called (window)
x() // window in non strict mode
x() // undefined in strict mode
window.x() // in strict mode also we get window object now 
// reason -. if the function is called wothout any refernce of object then the value is undefined , but when we call it like window.x() , window object is calling object so it gives the window object 


//this inside an object method
//a function that is part of an object then it is a method
const obj = {
    a:10,
    x: function(){
        console.log(this) // obj         object -> { a :10 , x:F()}
    }, 
}

obj.x() // ans printed above

// call apply bind methods 
// used when we have to share methods

// this inside arrow function 


// this inside nested arrow function 


// this inside DOM









