/*

let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr)


//using for loop traversing the element of array 
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    
}

//using while loop traversing the element of array 
let start = 0
while(start<arr.length){
    console.log(arr[start]);
    start++
}

//using for-of loop traversing the element of array 

for(let item of arr){
    console.log(arr[item]);
}



let arr = [1,2,3,4,5]

for(let i= arr.length-1;i>=0;i--){
    console.log(arr[i]);
    
}

---------------------------------------------------------------------------------
>>>>>>>>>>>>>>>> push / pop / unshift / shift


let arr = [1,2,3,4,5]

console.log(arr);

arr.push("satyam") // adding from end

console.log(arr);

arr.pop("satyam") // removing from end

console.log(arr);

arr.unshift("satyam") // adding from starting
console.log(arr);

arr.shift("satyam") // removing from starting
console.log(arr);

arr[3] = "satyam" //pushing elements in index 
console.log(arr);


console.log(arr.includes("satyam"))   //check whether present 

arr.reverse();
console.log(arr);

---------------------------------------------------------------------------------
>>>>>>>>>>>>>>>> slice


let arr = [1,2,3,4,5,6,7,8]

let ans = arr.slice(0,5) //slice from starting 0 but not include 5th index

console.log(ans)

let ans2 = arr.slice(0,3) //slice from starting 0 but not include 3th index

console.log(ans2)

let ans3 = arr.slice(4) //slice from starting 4 

console.log(ans3)

let ans4 = arr.slice(-5,-1) //slice from starting last to 1 but not include 1

console.log(ans4)


---------------------------------------------------------------------------------
>>>>>>>>>>>>>>>> splice / indexOf / lastIndexOf / concat



let arr = [1,2,3,4,5,6,7,8,5,4,6,7,4,5,9]
let arr2 = ["satyam","shuvan","sundram"]
console.log(arr)
let ans = arr.splice(3,0,"satyam") //pushing an elemnt at particular index

console.log(arr)
console.log(ans)

console.log(arr.indexOf(5))
console.log(arr.lastIndexOf(7))

let ans2 = arr.concat(arr2)  // joining two arrays
console.log(ans2)

let ans3 = arr.join(ans2)  
console.log(ans3)   

>>>>>>>>>>>>>>>> split / join

let name = "satyamgupta"
let username = "stymrj"

let arr4 = name.split('m') // kaha se hmko split ktna hai 
console.log(arr4)


let arr5 = arr.join("")
console.log(arr5)



not a valid method

// let n = prompt("Enter value of n..")
// let m = prompt("Enter the value of elements in array..")
// let arr = []

// for(let i=0;i<=n;i++){
//    arr = m.split(",")
// }
// console.log(arr)


let arr = []
let n = prompt("Enter value of n..")

for(let i=1;i<=n;i++){
   let m = prompt("Enter the value of elements in array..")
   arr.push(m)
}

let j =0
while(j<arr.length){
    console.log(arr[j])
    j++
}

created a extra array for reversal 


let arr = [1,2,3,4,5]
let arr2 =[]

method-1

for(let i=arr.length;i>0;i--){
    arr2.push(arr[i]);
}

method-2

for(let i=0;i<arr.length;i++){
    arr2.unshift(arr[i]);
}
console.log(arr)
console.log(arr2)

Reversing Array without creating any extra array



// let arr = [1,2,3,4,5]

// let s = 0 
// let e = arr.length-1
// console.log(arr);

// while(s<e){
//     let temp = arr[s]
//     arr[s] = arr[e]
//     arr[e] = temp

//     s++
//     e--
// }
// console.log(arr);


let arr = [1,2,3,4,5]

let s = 0
let e = arr.length-1

while(s<e){
    //swap
    let temp = arr[s]
    arr[s] = arr[e]
    arr[e] = temp

    s++
    e--
}
console.log(arr);

*/

let arr = [1,2,3,4,5,6,7,8,9,10]
let sum = 0

for(let i=0;i<arr.length;i++){
    sum += arr[i]
}
console.log(sum)