//block of code code that can use as required

function addTwoNo(n1,n2){
  return n1+n2
}
//console.log(addTwoNo(3,4))

//multiple arguments handle using spread method

function addTwoNo(...no){  
    return no
}

//console.log(addTwoNo(2,3,4,5,6))  //conver argument into array

// Passing objects in function

const user={
    name:"Manu",
    age:17
}
function handleObject(anyobject){
    return `${anyobject.name} and ${anyobject.age} `
}

// console.log(handleObject(user))
// console.log({name:"Manu",age:33})

//Passing array to function
const arr=[10,20,30,40]

function handleArray(anyArray){
    return anyArray
}

console.log(handleArray(arr))
console.log(handleArray([10,20,20,20]))