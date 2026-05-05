console.log("Hello, JavaScript!");

const id=101
let name="Amma"
var age=45
city="abd"

//console.table([id,name,age,city])

// id=102
name="Dada"
age=52
city="lucknow"

//console.table([id,name,age,city])

// alert(3+3) not work here this is run in browser console

// let x=4
// y=x++
// console.log(x,y)

// z=++x
// console.log(z)

// a=--z
// b=z--
// console.log(a,b,z)

//console.log("2"==2) //only value check
//console.log("2"===2) // value and type check


//Memory stack(primitive) and heap(Reference)
let a=10
let b=a

 b=12
 console.log(a)
 console.log(b);

 //heap

 let name1={
    name:"amma",
    age:34
 }
 
 name2=name1
 name2.name="Dada"
 //name2.age=60

 console.log(name1)
 console.log(name2)