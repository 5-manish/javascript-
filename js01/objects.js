 //declaration  1. literal 2. objects

 //literal

 const sym=Symbol("v1")
 const myObj={
   name:"Manish",
   age:20,
   location:"Etawah",
   lastLogin:["Monday","Saturday"],
   [sym]:"value1"
 }
 //console.log(myObj)

 //Add function in object
 myObj.greeting=function(){
        console.log("Hello myObj");
        
 }

 myObj.greeting2=function(){
    console.log(`Hello ${this.name}, how about you`);
    
 }
//  console.log(myObj.greeting());
//  console.log(myObj.greeting2());

// console.log(Object.keys(myObj))   //show key 
// console.log(Object.values(myObj)) //show value
 
///combine two or more objects same using spread method in array

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3=Object.assign(obj1,obj2)
// console.log(typeof obj3);

const obj4={...obj1,...obj2}
//console.log(typeof obj4)

obj4[2]="two"
console.log(obj4)

Object.freeze(obj4)  //not altering after this line will happen

obj4[4]="four"
console.log(obj4);

 


