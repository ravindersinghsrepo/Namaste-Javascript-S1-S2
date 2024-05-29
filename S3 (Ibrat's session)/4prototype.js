// prototype is a special property , which helped in inheritence till es5 

// Inheritence : properties & methods of parent class used in child class 


// prototype used for adding new method in that class 
Number.prototype.cube = function(){
    return Math.pow(this,3)
}

a= 3; 
console.log(a.cube()); //27 

// reverse a string by implementing a reverse method and adding it in the prototype 

function abc(){

}

const fn = function (){
    
}
