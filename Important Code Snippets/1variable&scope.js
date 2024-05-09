// example 1 - 

// block scope example 
// {
//     let name1 = 'ram'
//     let name2 = 'hari'
// }

// console.log(name1); //Ref err : name1 not defined 
 
// name1 and name2 are only accessible inside the block 

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
// let name1 = 'ram'
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
  
//12
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


//13 
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
//     console.log(a);//30
// } // as we come out of this function all its EC is also poped out of call stack
// console.log(a);//20
// x();



// {
//     let a = 10 ; 
//     const b = 20 ; 
//     var c = 30 ; 
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(c);
// console.log(a);
//     console.log(b);


// var a = 100;
// function abc() {
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
// console.log(y);//200
// console.log(x);// ref err : x is not defined

// function abc() {
// 	let z = 2300;
// 	{
// 		var z = 100; // SyntaxError: Identifier 'z' has already been declared
// 		console.log(z);
// 	}
// 	console.log(z);
// }
// abc();

