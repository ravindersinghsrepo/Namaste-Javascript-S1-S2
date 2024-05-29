// create a protoype function for reversing a string 
// array string questions from ibrat 
// link for practising the js question 
// read about methods in array -> flat method 
//write the logic of flat an array [1,2,[3,4,[5]]];


console.log('begins');

setTimeout(() => {
	console.log('setTimeout 1');
	Promise.resolve().then(() => {
		console.log('promise 1');
	});
}, 0);

new Promise(function (resolve, reject) {
	console.log('promise 2');
	setTimeout(function () {
		console.log('setTimeout 2');
		resolve('resolve 1');
		resolve('resolve 2');
		reject('reject 3');
		console.log('setTimeout 3');
	}, 0);
})
	.then((res) => {
		console.log('dot then 1');
		setTimeout(() => {
			console.log(res);
		}, 0);
	})
	.catch((e) => {
		console.log('dot catch 1');
		setTimeout(() => {
			console.log(e);
		}, 0);
	})
	.finally(() => {
		console.log('dot finally 1');
		setTimeout(() => {
			console.log('cleanup');
		}, 0);
	});

console.log('end');


// begin
// promise 2
// end
// settimeout 1
// Promise 1
// setimeout 2
//settimeout 3
// dot then 1
// dot finaly 1
// resolve 1 
// cleanup 


// web Api
// microtask -> 
// callback ques -> setimeout


// begins
// promise 2
// end
// setTimeout 1
// promise 1
// setTimeout 2
// setTimeout 3
// dot then 1
// dot finally 1
// resolve 1
// cleanup
