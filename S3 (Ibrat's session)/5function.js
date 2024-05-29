// normal function 

function abc () { 
    console.log(arguments) // [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7 }
}

// function expression
const fn = function() {

}

// named function exppression
var fn1 = function abc() {

}

// arrow function (es6)
const fn3 = (...arguments) =>{
    console.log(arguments) //[ 2, 3, 4, 5, 6, 7 ]
}



// abc(2,3,4,5,6,7)
// fn3(2,3,4,5,6,7) // gives error as arguments keyword removed in arrow function in es6 (when we dont use spread operator in the function )
// that why es6 introduced new feature of spread operators



//IFEE -immediately invoked function
(function(){
    console.log('2')
}())


// HOC
// returns a function and takes a function 

// default paramter at the end of the sequence 
function abc(b , c, a = 10){
    console.log(a + b + c);
}
abc(10,20) // 40


