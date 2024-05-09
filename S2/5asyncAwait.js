// what is async ?
// asunc is a keyword that is used before a function to make a async function 

// always returns a promise
// is we return a non promise value -> string boolean number then this function will automatically wrap that value in a promise and return it

// code : 
// async function getData(){
//     // return new Promise((resolve , reject)=>{

//     // })
//     return 'Namaste'
// }

// const data =  getData(); 
// console.log(data) //Promise {<fulfilled>: 'Namaste'}

// data.then((res)=>console.log(res)) // Namaste


//--------------------------------------------------------------
// lets return a promise from above 

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise resolved value ')
    },10000);
});


async function getData2(){
    // we attach then and catch block
    // js engine foes not wait for promise to be resolved 
    p.then((res)=>console.log(res));
    console.log("Statement after Promise is resolved for then function")
}

getData2()

//aync and await are used to handle promises 

// await is a keyword that can be used inside and async function 

// how did we used to handle promises before async await 
// i.e by using then and catch method

// function getData3(){
//     p.then(res=>console.log(res))
// }

// with async await we do 

async function handlePromise(){
    const val = await p ; // program stops here till p is resolved
    console.log(val); // promise resolved value
    console.log("statement after await ")
}
handlePromise();

// why async await is special ? 
// explained in above exmaple 



// what is await ?
// how async await works behind the scenes? 
// example of using async/await 
// Error handling 
// Interviews 
// Async await vs Promises.then/.catch 












