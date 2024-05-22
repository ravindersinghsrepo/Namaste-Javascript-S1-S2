// what is closure 
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

function close(){
    let id = 12;
    return function(x){
        return id+x;
    }
}
let fn = close();
console.log(fn)
console.log(fn(2));











