// normal function
 

 //addone(4)  this can also work 
function addone(num){
    return num+1
}
addone(4)

//expression

const addtwo=function(num){
    return num+2 
}
addtwo(4)  //here before funtion declaration can't call


// this keyword -- refer the current context

const user={
    username:"Manish",
    year:2030,
    msg:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
    
}

user.msg()
user.username="Amit"
user.msg()
console.log(this)  //this will give empty block because globally hai but do this in browser or inside function

//use this in function
function code()
{
    let name="javascript"
    console.log(this.name) //undefined means we only use this with objects and ye expression me bhi kaam nhi karega
    console.log(name)
}
code()

//Arrow function

const chai = () =>{
    let name="Amar"
    console.log(this.name) //same as above
    console.log(name)
}