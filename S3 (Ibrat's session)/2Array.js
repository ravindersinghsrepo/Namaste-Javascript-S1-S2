// Array 
// we can add any type of datatype in an array 
arr = [12 , true , 'asa' , false , [] , {} , undefined , null , '' , Symbol('ABC')] ; 
// 2nd way of creating array 
arr2 = new Array(10);
console.log(arr2);
// push used to insert at the end & it returns the new length 
// pop used to remove from the end 

// unshift used to add at the beginning & it returns the new length 
// shift used to remove at the beginning 

// inbuilt methods in array ->splice slice , flat
// splice is very important , find interview questions realted to it 


// sorting 

arr = ['z' , 'c' , 'a' , 'b'];
arr.sort() //O(nlogn)
arr= [12,3,4,0,1]
arr.sort()
console.log(arr) // [ 0, 1, 12, 3, 4 ] (sorted on based on ascii code )
// how to sort on the basis of number value 
arr.sort((a,b)=>{
    if(a>b) return 1 ;
    else if(a==b) return 0;
    else return -1;
});
console.log(arr); // [ 0, 1, 3, 4, 12 ]

// short form for above code (use only if we have pure numbers in arr)
arr.sort((a,b)=>a-b);
console.log(arr)
// for descending do b-a 

// iterator in-built methods 
arr= [12 , true , 'asa' , false , [] , {} , undefined , null , '' , Symbol('ABC')] ; 
arr.forEach(function(val,ind,array){
    console.log(val, ind , array)
})
//map , filter , reduce

