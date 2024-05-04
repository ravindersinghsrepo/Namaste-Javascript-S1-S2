const arr = [5 , 1, 2, 3, 6];
// tranformation into some other array 
// doubble  -> [ 10 , 2 , 4 , 6, 12];
const double = function(x){
    return x * 2;
}
const output = arr.map(double)

console.log(output) // [10 , 2 , 4, 6, 12]




