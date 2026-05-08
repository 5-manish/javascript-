// const arr=[1,2,3,4,5]
// console.log(arr[1])


// //Slice and Splice in Array

// //const myarr=[0,1,2,3,4,5]
// const OriginalArr=new Array("A",0,1,2,3,4,5)
// console.log("Original array  ", OriginalArr);


// //slice
// const arr1 = OriginalArr.slice(1,3)
// console.log("After slicing ", arr1);
// console.log("Original array A ", OriginalArr);


// //splice
// const arr2 = OriginalArr.splice(1,3)
// console.log("Array after splicing ", arr2)
// console.log("Original array  B", OriginalArr);

// Array concatenation
 //wrong method

 const arr1=[1,2,3]
 const arr2=[4,5,6]

//  const arr3=arr1.push(arr2)
//  console.log(arr3)

// const arr3=arr1.concat(arr2)
// console.log(arr3)

//Spread method
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// const mixArr=[1,2,[3,4],[5,[6,7,8]],9]
// console.log(mixArr.flat(Infinity))