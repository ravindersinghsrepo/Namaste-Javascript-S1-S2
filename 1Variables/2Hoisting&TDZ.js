

// Hositing 

//1
// console.log(name) // ref err: cannot access name before initialization
// let name = 'ram';

//2
// console.log(name) //undefined
// var name = 'ram';


// **********IMP***********-> only declaration statement is hoisted not initialization statement 
//3 
// console.log(name) // undefined
// var name = 'ram'; // declaration statement 
// // console.log(name)   //ram

//4 
// console.log(x) // Ref error : x is not defined 
// x = 7 ;  // initiallization statement 

// with const and let we get following error 
// console.log(x) // ref err: cannot access 'x' before initialization
// let x = 7 ;  // initiallization statement 


//5 
// var x = 5 ; 
// var y ; 
// console.log(x+" "+y); // 5 undefined

//6
// console.log(x+" "+y); // undefined undefined
// var x = 5 ; 
// var y ; 

//7
// x = 7; // no err 

//8 
// 'use strict'
// x = 7 ; // ref err : x is not defined

//9 
// x = 3.14 ; 
// myfunction();

// function myfunction(){
//     'use strict' // has functional scope here 
//     y = 5 ; 
//     console.log(y) // ref err:y is not defined
// }


//10 
// console.log(name) // name is not defined 

//11 
// carName = "Volvo";
// const carName; // SyntaxError: Missing initializer in const declaration

// ****Temporal Dead Zone ******

//1
// { // start of tdz
//     let  name = 'ram'
//     console.log(name)

//     console.log(foo); // ref error : cannot access foo before initialization
//     let foo = 'foo' // end of tdz
// }

//2
// name ='ravi' // ref err: cannot access name before initialization
// let name;







