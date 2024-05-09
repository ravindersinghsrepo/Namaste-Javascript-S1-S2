const cart = ["shoes" , "pants",'kurtas'];

// createOrder(cart); // gives order Id

// after above following action should happen , when it receives the order ID 
// proceedToPay(orderId) 
//-> both apis are asynchronous (some time they consuming and both dependent on each other)
//-> we handle this with callback as following 

//----------------------------------------------------
//-> we wrapped proceed to Payment method in a function and passed it as a callback function in create order ID 

// create order responsible to call the callback function with order ID that it creates after create the order 
// problem here is inversion of control 
//-> we are giving control of proceed to payment to create order api -> which may not call it due to any reason . which is not a very good way of writing the code 

// createOrder(cart , function(orderId){
//     proceedToPayment(orderId);
// });

// here create order function calls the callback function whenever it want to (callback function is passed here )
//--------------------------------------------------------------
// this situation handled by promises 

// const promise = createOrder(cart) // is an async operation 
// create order return us an object with a data value with undefined at the moment this line is executed , when the order is created after some async time , the order id or actual data is filled in the object 
// {data : orderDetails}
//-------------------------------------------------------------
// now what we do with our order ? 
// we attach a callback function to the promise object 
// then() -> function accessible over the promise object -> execute when the Promise is resolved.
// promise.then(function(orderId){
//     proceedToPayment(orderId)
// })
// callback function is attached here 
// we had doubts on earlier piece of code , (no call , or called callback fn twice)
// promise gives us guarantee that callback function will be called 100% of time whenever promise object receives the data after some time . it will call it just once , we also have control of our code 

//-----------------------------------------

const GITHUB_API = 'https://api.github.com/users/akshaymarch7'

const user = fetch(GITHUB_API);
user.then(function(data){
    console.log(data);
})

// what is a promise ? 
// promise object is a placeholder , which will be filled with data after we receive a value from an asynch operation
// or
// a container for future value 
//  MDN says:
// promise is an object represting an eventual completion of an asynchronous operation

// there are only 3 states of promise a) fulfilled , b) pending c) rejected .

//----------------------------------------------------
// comment only previous block and un comment all other blocks 

createOrder(cart).then(function(orderId){
    return proceedToPayment(orderId);
}).then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo);
})






