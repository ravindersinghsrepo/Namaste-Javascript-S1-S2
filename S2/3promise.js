// const cart = ["shoes","pants","kurta"];
const cart = [] // uncomment if you want to invalidate cart 

// createOrder(async operation) retruns a promise
// const promise = createOrder(cart);
// console.log(promise)
// promise.then(function(orderId){ // this is a callback function which work acc to the promise result if promise is fulfilled
//     console.log(promise) // after 5 sec it is printed -> Promise { '12343' }
//     console.log(orderId) //12343
//     proceedToPayment(orderId);
// }).catch((err)=>{ // to handle if promise is rejected then we use inbuilt method catch 
//     console.log(err.message)
// })
//----------------------------------------------------------------

createOrder(cart).then(function(orderId){
    console.log(orderId)
    return orderId; // important to return this down the chain
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message);
})
// then methods after catch will always be executed no matter what
.then(function(){
    console.log('No matter what happens i will be called ')
})
// promise creation 

function createOrder(cart){
    // creating a promise 
    const pr = new Promise(function(resolve,reject){
        // create an order 
        // validate the cart   
        // orderId returned
        if(!validateCart(cart)){
            // resolve and reject 2 powerful methods given by js 
            // if cart is not validated -> we reject the promise
            const err = new Error('Cart is not valid') ;
            reject(err);
            return ; // if we dont want to continue the code below then we must add return here (Imp)
        }
        // If we are here then cart is valid :. we create order 
        const orderId = '12343';
        if(orderId){
            setTimeout(function(){
                resolve(orderId) // fulfills promise 
            }
            ,5000);
        }
    })
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve('Payment successfully done!')
    })
}

function validateCart (cart){
    if(cart.length==0) return false ;
    return true;
}







