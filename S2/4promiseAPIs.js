// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('P1 success'),3000);
// })
// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('P2 success'),1000);
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('P3 success'),2000);
// })

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))

//------------------------------------------------
// 1 call fails in promise.all() -> no wait for all others to get fulfilled
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('P1 success'),3000);
// })
// const p2 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve('P2 success'),1000);
//     setTimeout(()=>reject('P2 fails'),1000);
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('P3 success'),2000);
// })

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))

//------------------------------------------------
// what if p3 fails and p2 is success 
// then we see failure error after p3 is rejected 

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('P1 success'),3000);
// })
// const p2 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve('P2 success'),1000);
//     setTimeout(()=>resolve('P2 fails'),1000);
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('P3 fails'),2000);
// })

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))

// Promise.allSetttled()

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('P1 success'),3000);
// })
// const p2 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve('P2 success'),1000);
//     setTimeout(()=>resolve('P2 fails'),1000);
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('P3 fails'),2000);
// })

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))

// [fulfilled, fulfilled, rejected]
/*[
{status: 'fulfilled', value: 'P1 success'}
1
: 
{status: 'fulfilled', value: 'P2 fails'}
2
: 
{status: 'rejected', reason: 'P3 fails'}
]
*/

//---------------------------------------------
// 3) Promise.race()-> returns result of first fulfilled result 

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('P1 success'),3000);
// })
// const p2 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve('P2 success'),1000);
//     setTimeout(()=>resolve('P2 fails'),5000);
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('P3 fails'),2000);
// })

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))

// promise.any()-> waits for sucsess

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('P1 success'),3000);
// })
// const p2 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve('P2 success'),1000);
//     setTimeout(()=>resolve('P2 success'),5000);
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('P3 fails'),2000);
// })

// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))

// -> all fails in any()
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject('P1 fails'),3000);
})
const p2 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('P2 success'),1000);
    setTimeout(()=>reject('P2 fails'),5000);
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject('P3 fails'),2000);
})

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch(err=>{
    console.log(err) //AggregateError: All promises were rejected
    console.log(err.errors) //['P1 fails', 'P2 fails', 'P3 fails']
})

// we get -> AggregateError: All promises were rejected
