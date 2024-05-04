// what is a callback function in js 
function x(a){
    console.log('x is called')
    y()
}

function y(){
    console.log('y is called ')
}

x(y)
// giving the responsibility of calling y to x 

// x is the HOF here 
// y is the callback function 

