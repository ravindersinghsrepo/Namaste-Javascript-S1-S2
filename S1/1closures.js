// function x(){
//     var a = 7 ; 
//     function y(){
//         console.log(a); // lexical scope 
//     }
//     y();
// }
// x();
// closure is a function bundled together with its lexical environment .

// --------------------------------------

// passing a function to a function call 
// we can return function from a function

// var z = x(function(){

// })

// we can also return a function from another function 
function n(){
    var a = 9 ; 

    function u(){
        console.log(a);
    }
    return u;
}

var k = n();
console.log(k); //[Function: u] 
// u still has the lexical environment of function u now it is stored in k 
k();  // 9 

// -------------------------------------------------
// function along with the reference of its outer variables is shared actually 
function r(){
    var x = 0 ;
    function d(){
        console.log(x);
    }
    x = 10 ; 
    return d;
}
r()(); // 10 
// x = 10 at the end before returning d :.  10 is printed 

function grandparent (){
    var x = 0;
    function parent(){
        var a = 9 ;
        function child(){
            console.log(a,x);
        }
        child();
    }
    parent();
}
grandparent(); // 9 , 0 












