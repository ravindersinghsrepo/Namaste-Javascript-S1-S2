// example 1 - 

// block scope example 
// {
//     let name1 = 'ram'
//     let name2 = 'hari'
// }

// console.log(name1); //Ref err : name1 not defined 
// // name1 and name2 are only accessible inside the block 

// hoisting case : 
// {
//     console.log(name1); //Reference err :Cannot access 'name1' before initialization
//     let name1 = 'ram'
//     let name2 = 'hari'
// }


//example 2
// {
//     let name1 = 'ram';
//     let name2 = 'hari';
//     console.log(name1) // ram
//     console.log(name2) // hari 
// }


//example 3
// let name1 = 'ram';
// {
//     console.log(name1); // ram
//     let name2 = 'hari'
//     console.log(name2)// hari
// }
// console.log(name1); // ram


//example 4
// let name1 = 'ram'
// {
//     console.log(name1); // ram
//     let name2 = 'hari'
//     console.log(name2)// hari
// }
// console.log(name2); // ref err:name2 is not defined


//example 5a 
// {
//     var a = 10 ; 
//     let b = 100;
//     const c = 90 ;
//     console.log(a)//10
//     console.log(b)//100
//     console.log(c)//90
// }
// console.log(a) //10 (security issue)
// console.log(b) //ref err  b is not defined & program execution stops 
// console.log(c)  //ReferenceError: c is not defined ( if code in line 60 is also commented and then we run the program)

//example 5b
// {
//     var a = 10 ; 
//     let b = 100;
//     const c = 90 ;
//     console.log(a)//10
//     console.log(b)//100
//     console.log(c)//90
// }
// console.log(a) //10 
// console.log(c) // ref err: c is not defined 

//6. -> overshadowing 
// var a= 100;
// let b = 200;
// const c = 300; 
// {
//     var a = 10 ; 
//     let b = 20 ; 
//     const c = 30 ; 
//     console.log(a); //10
//     console.log(b); // 20
//     console.log(c);//30
// }
// console.log(a);//10(overshadowed value)
// console.log(b);//200(scope)
// console.log(c);//300 (scope)


// IMPOrtant 
// SCOPING RULES ->Variables declared by let have their scope in the block for which they are declared, as well as in any contained sub-blocks. In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function:
// function letTest() {
//     let x = 1;
//     {
//       console.log(x); //ReferenceError: Cannot access 'x' before initialization
//       let x = 2; // different variable
//       console.log(x); // 2
//     }
//     console.log(x); // 1
//   }
//   letTest()

//   function varTest() {
//     var x = 1;
//     {
//       console.log(x);//1
//       var x = 2; // same variable!
//       console.log(x); // 2
//     }
//     console.log(x); // 2
//   }
//   varTest()

//7. overshadowing of global variable 
// var x  = 'global'
// function foo(){
//     let x = 'function'
//     console.log(x) // function {overshadowing here} 
// }
// foo()
// console.log(x) // global


//8.
// var a = 20 ;
// {
//     let a = 40 ;
//     console.log(a); // 40 
// }
// console.log(a) //20 

// 9. illegal shadowing 
// let a = 20 ; 
// {
//    var a = 10 ; //Syntax error : Identifier 'a' has already been declared
// }
// let cannot be redeclared in a particular scope 

//9b .
// let a = 20 ;
// {
//     a = 10;
//     console.log(a) // 10
// }
// console.log(a)//10


//10. following is acceptable 

// let a = 20 ; 
// function foo(){
//     var a = 10 ;
//     console.log(a) // 10
// }
// foo()
// console.log(a) // 20 

//11 
// const a = 20 ; 
// {
//     const a = 30 ;
//     {
//         const a = 40;
//         console.log(a) // 40
//     }
//     console.log(a)//30
// }
// console.log(a)//20
  
// 12
// let a = 10 ; 
// {
//     let a = 20 ;
//     {
//         let a = 30 ;
//         console.log(a) // 30
//     }
//     console.log(a) //20
// }
// console.log(a)//10


// 13 
// var a = 20 ; 
// {
//     var a = 30;
//     {
//         var a = 40;
//         console.log(a) //40
//     }
//     console.log(a)//40
// }
// console.log(a)//40


//14
// var a = 20 ; 
// function x(){
//     var a = 30 ; // this a has functional scope only 
//     console.log(a); //30
// } // THIS FUNCTIONS COMES IN EC ONLY WHEN IT IS CALLED WHICH IS AFTER THE CONSOLE LOG STATEMENT , IN THE VARIABLE ENVIRONMENT WE STILL HAVE a AS A SAPERATE VARIABLE 
// console.log(a);//20
// x();



// {
//     let a = 10 ; 
//     const b = 20 ; 
//     var c = 30 ; 
//     console.log(a);//10
//     console.log(b);// 20 
//     console.log(c);// 30
// }
// console.log(c); // 30 
// console.log(a); //ReferenceError: a is not defined {NOW PROGRAM EXECUTION STOPS HERE}
// console.log(b);


// var a = 100;
// function abc(){
// 	var x = 300;
// 	y = 200;
// 	let z = 2300;
// 	{
// 		let z = 100;
// 		console.log(z);//100
// 	}
// 	console.log(x);//300
// 	console.log(y);//200
// 	console.log(z);//2300
// 	console.log(a);//100
// }
// abc();
// console.log(y); //200
// console.log(x); // ref err : x is not defined

// function abc() {
// 	let z = 2300;
// 	{
// 		var z = 100; // SyntaxError: Identifier 'z' has already been declared
// 		console.log(z);
// 	}
// 	console.log(z);
// }
// abc();

//-------------------------------------
// MDN says : Traditionally (before ES6), JavaScript only had two kinds of scopes: function scope and global scope. Variables declared with var are either function-scoped or global-scoped, depending on whether they are declared within a function or outside a function. This can be tricky, because blocks with curly braces do not create scopes:

// if(Math.random()>0.5){
//     var x = 1 ;
// }else{
//     var x = 2;
// }
// console.log(x); // {VALUE OF X WILL BE PRINTED HERE AS X IS ACCESSIBLE HERE}


// important examples : 

// function getVar(){
//     var z = 10 ;
// }
// console.log(z) // ref err : z is not defined 


// //
// function getVar(){
//     var z = 10 ; //
// }
// getVar()
// console.log(z) // ref err : z is not defined 



// ex 2 
// {
//     var a = 20 ;
// }
// console.log(a)//20

//

// console.log(abc); // Function : abc 
// var abc = 200;
// function abc() {}
// console.log(abc) // 200

//--------------------------------------------------------
// TDZ 
// {
//     // TDZ starts at beginning of scope
//     const func = () => console.log(letVar); // 3
  
//     // Within the TDZ letVar access throws `ReferenceError`
//     console.log(letVar) //ReferenceError: Cannot access 'letVar' before initialization
//     let letVar = 3; // End of TDZ (for letVar)
//     func(); // Called outside TDZ!
//   }

//-----------------------------------------------------
//Using the typeof operator for a let variable in its TDZ will throw a ReferenceError:
// typeof i ; //ReferenceError: Cannot access 'i' before initialization
// let i = 10 ;
//---------------------------------------------------------
//This differs from using typeof for undeclared variables, and variables that hold a value of undefined:
// console.log(typeof undeclaredVariable); // undefined 

//--------------------------------------------------------
// A let declaration within a function's body cannot have the same name as a parameter. A let declaration within a catch block cannot have the same name as the catch-bound identifier.
//ex -1 
// function foo(a) {
//     let a = 1; // SyntaxError: Identifier 'a' has already been declared
//   }

// ex -2   
//   try {
//   } catch (e) {
//     let e; // SyntaxError: Identifier 'e' has already been declared
//   }

// TDZ with lexical scope 
// The expression foo + 55 throws a ReferenceError because initialization of let foo has not completed
// function test() {
//     var foo = 33;
//     if (foo) {
//       let foo = foo+ 55; // ReferenceError
//     }
// }
// test();

/* 
However, this combination of var and let declarations below is a SyntaxError because var not being block-scoped, leading to them being in the same scope. This results in an implicit re-declaration of the variable.

let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
*/


// hoisting -> noted in notion 

// console.log(a) // ReferenceError: a is not defined
// a = 10 ; 
// console.log(b) // undefined 
// var b = 20 ; 
// console.log(c) //ReferenceError: Cannot access 'c' before initialization
// let c = 30 ; 
// console.log(d) //ReferenceError: Cannot access 'd' before initialization
// const d = 40 ; 
