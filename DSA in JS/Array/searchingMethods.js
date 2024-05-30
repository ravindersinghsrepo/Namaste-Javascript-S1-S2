// searching a value in array in js 

// indexOf method
groceryList = [ 'egg', 'butter', 'bread', 'cereals', 'rice' , 'bread' ]
console.log(groceryList.indexOf('bread')) // 2 (bread is ar 2nd index i.e its first occurance)
console.log(groceryList.indexOf('peanut')) // -1 (non existent)

// find method -> takes a cb function and the 1st item that satisfies the condition  in b function is returned 

arr2 = [121 , 33, 17,161, 15 , 181]
const evenElement = arr2.find((item)=>item%2==0)
console.log(evenElement) // 12 (0th element is even element)
// undefined is returned if no element is found that satisfies the condition 


// includes() method 
// syntax -> arr.includes(searchElement , fromIndex)
// returns true if searchELement is present in the arr else it returns false 

let vowel = ['a','e','i','o','u']; 
console.log(vowel.includes('a')); // true 


// filter method is used to find all the elements that match the given condition . 

arr2 = [12 , 13 , 14 , 15 , 16 , 17];
filteredArray = arr2.filter((elem,ind)=>{
    return elem%2==0;
})
console.log(filteredArray) // [ 12, 14, 16 ]