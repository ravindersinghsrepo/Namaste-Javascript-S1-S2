const nums = [1,2,3,45,6,7,8,9];

for(let num of nums){
    console.log(num) // num i element here 
}

for(let i in nums){
    console.log(i) // is the index here 
}

obj = {a :100 , b:200};
console.log(obj) //{ a: 100, b: 200 }

// if we have symbol(symbol.iterator)in [Prototype] in the elmenet then for of loop will work , it is present in the array but not in object

//object.keys is used to access the keys of the object 

// for in can be used to print the keys in the object
for(let i in obj){
    console.log(i) // a, b 
}


