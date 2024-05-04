// Functions Statement 

// name();
// variable(); // type error variable is not a function 
// variable is undefined untill in code execution phase js engine comes across line number 11

function name(){ 
    console.log('This way of defining a function is called function statement');
}

// function expressiom 
var variable = function (){
    console.log('Here function acts as a value the variable')
}

//Imp

// hoisting case in above both cases 

// Function declaration 
// is same as function Statement

// Anonymous function-> Acc to ecma script should always have a name 

// function(){ -> is a function statement 

// } -> gives error 

// anonymous functions are mostly used as a value to be assigned to a variable 

// Named function expression 
var variable2 = function name2(){

}
name2() //ReferenceError: name2 is not defined
// name2 is not created as a globally here therefore cant be accessible in global space 
// we can access it inside name2 function as well

// arguments are always passed 
// parameters are set as the incoming values to a function 

// first class functions 
// functions can be passed in other functions as arguments 

// ability of functions to be passed as value and assgined to a variable or being returned from another function -> this ability is called first class functions 
// first class citizens is also same 





