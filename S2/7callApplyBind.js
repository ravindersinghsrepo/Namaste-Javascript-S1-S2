let name = {
    firstName : "Ravinder",
    lastName : "Singh",
    // printName : function(){
    //     // each and every function in js has access to this keyword , this will point to the name object here 
    //     console.log(this.firstName + " " + this.lastName)
    // }
}
// name.printName() ; 

let name2 = {
    firstName : "sachin" , 
    lastName : "tendulkar"
}
// on way of using the printName function is using the copy paste technique and the other way is using th call method

// call method is used for function borrowing  , we can borrow function of other objects and use it for the soem other object 
// each and every method in js has access to the special function called call 

// function borrowing
// name.printName.call(name2) // name2 is the obj where the this needs to be pointing 


// FOLLOWING IS APPLICABLE IF FUNCTION(PRINTNAME) IS NOT IN OBJECT
function printName(hometown, state){
    console.log(this.firstName + " " + this.lastName , " from " , hometown ,"," ,state)
}
// we can printName with name and name2
// printName.call(name , 'new delhi' , 'Delhi');  // later arguments can be the arguments to function
// printName.call(name2 , "mumbai" , "Maharashtra");

// Apply method ,  we pass the extra arguments in an array
printName.apply(name2 , ["mumbai" , "Maharashtra"]) //sachin tendulkar  from  mumbai , Maharashtra

// bind method -> binds the method to the object  we pass in it and it returns a function that we can call
let printfullName = printName.bind(name2 , ["mumbai" , "Maharashtra"])

printfullName() //sachin tendulkar  from  mumbai , Maharashtra
// used to bind and keep the copy of the method and keep it for later use

