// ABout json data 
// json type data used for communication between client and server . 
// data sent from client to server or server to client is json data 

//key is always string in json but in object it can be a number or variable 
// string data if used in value for any key should be always put in double quotes 
// value can be string , number , null , boolean , array 

// in objects functions , symbol , object  can also be a value 


// Deep copy and shallow copy 
// 1 using logic 
// 2 using json method 
obj = {
    1 : 100, 
    a : 'zero',
    // c : function(){}, 
    d: Symbol('first'),
    nested : {
        e : undefined , 
        f : null , 
        h : []
    }, 
    g : true ,
}; 

val = JSON.stringify(obj); // converts to json
console.log(val) //{"1":100,"a":"zero","nested":{"f":null,"h":[]},"g":true}

// whenever we are converting to json then unsupported types are skipped and not included in the resulting json object

// json to js object
copyobj = JSON.parse(val)
console.log(copyobj) //{ '1': 100, a: 'zero', nested: { f: null, h: [] }, g: true }
copyobj.nested.h = 312313123;
console.log(copyobj) // h has number here
console.log(obj) // h is still an array


// 3 using structured clone
// but a small limitation it has is that it wont work if we have function and symbol in our obj 

// newobj = structuredClone(obj); // DOMException [DataCloneError]: function(){} could not be cloned.
// after we remove function from obj we get -> DOMException [DataCloneError]: Symbol(first) could not be cloned. 

//shallow copy 
// changes in the copied object are reflected back in the original copy 

obj = {
    a : 100,
    b:{
        c:200
    }
}

copy = {...obj};
copy.b.c = 1;
console.log(copy) //{ a: 100, b: { c: 1 } }
console.log(obj) //{ a: 100, b: { c: 1 } }
copy.a = 0 ;
console.log(obj.a) //100
// first level keys are deepcopied but 2nd level objects are shallow copied


//spread as rest 
arr = [1,2,3,4,5];
let [a,b , ...rest] = arr;
