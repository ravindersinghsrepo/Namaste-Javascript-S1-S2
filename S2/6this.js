// this keyword
'use-strict'
// this keyword behaves differently in different environment 

// this in global space
// console.log(this); // window object 
// this keyword in global space represent the global object 
// inside browser global object is different than global object of node js 
// in case of browser the global object is window 
// in node js -> global 

// this inside a function 
function x(){
    //this 
    console.log(this) // window but in strict mode the value of this is undefined  (the value depends on strict and non strict mode )
}
// x();

// this in strict mode 

// this substitution 
// acc to this concept  if the value of this is undefined or null , this will be replaced with global object , only in non strict mode 
//:. inside function (non strict mode) -> window
//:. inside function (strict mode) -> undefined 


//this value depends on how this is called (window)
// x() // window in non strict mode
// x() // undefined in strict mode
// window.x() // in strict mode also we get window object now 
// reason -. if the function is called wothout any refernce of object then the value is undefined , but when we call it like window.x() , window object is calling object so it gives the window object 


//this inside an object method
//a function that is part of an object then it is a method
const obj = {
    a:10,
    x: function(){
        console.log(this) // obj         object -> { a :10 , x:F()}
    }, 
}

// obj.x() // ans printed above

// call  ,apply ,  bind methods 
// call:
// used when we have to share methods
const obj2 = {
    a : 20 
}
//to share function x with obj2 can be done with call , apply and bind 

// ------------
const student = {
    name : "Ravi",
    printName:function(){
        console.log(this.name) // Ravi
    }
}

const student2 = {
    name: "deepika"
}
// sharing function of student with student2
// student.printName.call(student2) // deepika 
// this for printName function will point to student2 when we use call method


// this inside arrow function 
// arrow function do not have their own this binding 
// the value of this keyword is enclosing lexical context for arrow function 

const obj3 = {
    a:10,
    x : ()=>{
        console.log(this) // 
    }
}
// obj3.x() // global object of current env -> window obj in chrome
// lexically enclosing means
// where the obj3 is present in the code -> global space


// // this inside nested arrow function 
const obj4 = {
    a:10,
    x :function(){

        const y = ()=>{
            console.log(this) // { a: 10, x: [Function: x] }
        }
        y();

    }
}
// obj4.x()

// value printed in line 90 is because y() is present lexically enclosed in function x 
// :. it behaves like it is present inside function x() , then it prints obj2

// if x was an arrow function then we would have got global object 

// asked in interview 
const person = {

	name: 'john doe',
	addr1: {
		city: 'city',
		state: 'state',
		getAddr: function () {
			console.log(this);
		},
	},
    
	addr2: {
		city: 'another city',
		state: 'another state',
		getAddr: () => {
			console.log(this);
		},
		getAddr2: function () {
			return () => {
				console.log(this);
			};
		},
	},

};
person.addr2.getAddr2()(); // person
person.addr1.getAddr(); //addr1
person.addr2.getAddr();// addr2



// this inside DOM









