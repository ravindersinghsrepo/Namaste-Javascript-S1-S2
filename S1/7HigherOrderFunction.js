// functioncal programming is possible with HOF only 
// -> a function which takes another function as argument or return a function from it 

const radius = [3,2,1,4];

const calculateArea = function(radius){
    const output = [];
    for(let i= 0 ; i < radius.length ;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}


const calculateCircumference = function(radius){
    const output =[]; 
    for(let i = 0 ; i < radius.length ;i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
const calculateDiameter = function(radius){
    const output =[]; 
    for(let i = 0 ; i < radius.length ;i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius))
// console.log(calculateCircumference(radius))
// console.log(calculateDiameter(radius))

const area = function(radius){
    return Math.PI * radius * radius;
}
const circumference = function(radius){
    return Math.PI * 2 * radius
}
const diameter = function(radius){
    return radius * 2 ;
}
const calculate = function (radius , logic){
    let output = [];
    for(let i in radius){
        output.push(logic(radius[i]))
    }
    return output;
}
console.log(calculate(radius , area))