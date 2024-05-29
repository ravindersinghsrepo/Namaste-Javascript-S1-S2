// call and apply -> es5 feature 
// to change on what this points 
// bind came in es6

let testobj= {
    a :100,
    b:{
        c:200
    },
    c:3400
}

function abc(b , c , a =0){
    console.log(this)
}

abc.call(testobj) // { a: 100, b: { c: 200 }, c: 3400 }
abc.apply(testobj) //{ a: 100, b: { c: 200 }, c: 3400 }
abc.bind(testobj)(); //{ a: 100, b: { c: 200 }, c: 3400 }




