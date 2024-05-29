
function abc() {
    console.log(this) // global object 
}

// abc();

const person = {
	name: 'john doe',
	addr1: {
		city: 'city',
		state: 'state',
		getAddr: function () {
			console.log(this);
		},
	},
	addr2: {
		city: 'another city',
		state: 'another state',
		getAddr: () => {
			console.log(this);
		},
		getAddr2: function () {
			return () => {
				console.log(this);
			};
		},
	},

};
// person.addr2.getAddr2()(); // person
// person.addr1.getAddr(); //addr1
// person.addr2.getAddr();// addr2