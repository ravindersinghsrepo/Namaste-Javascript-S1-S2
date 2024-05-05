// js being synch single threaded lang
console.log('Hello world')
console.log('NMJS')
console.log('Season 2')

//---------------------------------

//asynchronous nature of callback functions 
console.log('start')

setTimeout(()=>{

},5000);

console.log('end')


//------------------------------

const cart = ["shoes" , "pants","kurtas"];
api.createOrder(cart , function(){
    api.proceedToPayment()
})


