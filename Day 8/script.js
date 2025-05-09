/*

------------------------------------- Swapping ---------------------------------------------
 
            With Extra Variable - temp


let a = 12
let b = 18
console.log(`Before Swapping: a = ${a} & b =${b}`)

let temp = a
a = b
b = temp

console.log(`After Swapping: a = ${a} & b =${b}`)



let a = 12
let b = 18
console.log(`Before Swapping: a = ${a} & b =${b}`)

a = a+b        // a = 12 + 18 = 30
b = a-b        // b = 30 - 18 = 12
a = a-b        // b = 30 - 12 = 18

console.log(`After Swapping: a = ${a} & b =${b}`)



for(let j=1;j<=5;j++){
    let n = j
    let ans = 1
    for(let i = 1; i<=10;i++){
    ans = i * n
    console.log(`${n} X ${i} = ${ans}`)
}
}


let n = 10
for(let i=1;i<=n;i++){
    for(let j = 1 ; j<=10;j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
}
------------------ Printing Star n times -----------------

let n = prompt("Enter number of stars..")
let str =""
    for(let i=1;i<=n;i++){
    str += "* "
    }
console.log(str)

------------------ Printing Square Pattern (for loops) -----------------

let n = prompt("Enter number of stars..")
for(let i = 1;i<=n;i++){
    let str = ""
    for(let j=1;j<=n;j++){
        str += "* "
    }
    console.log(str)
}

------------------ Printing Square Pattern ( While Loops) -----------------

let n = prompt("Enter number of stars..")
let str = ""
let start = 1
let i = 1

while(i <= n){

while(start<=n){
    str += "* "
    start++
}
console.log(str)
i++
}



let n = prompt("Enter number of stars..")


for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=n;j++){
        str += j +"  "
    }
    console.log(str)
}



let n = prompt("Enter number of stars..")

for(let i = 1;i<=n;i++){
    let str = ""
    for(let j=1;j<=n;j++){
        str += i +" "
    }
    console.log(str)
}


let n = prompt("Enter number of stars..")


for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=n;j++){
        str += j + " "
    }
        console.log(str)
}

        Method - 1

let n = prompt("Enter number of stars..")


for(let i=1;i<=n;i++){
    let str = ""
    for(let j=n;j>=1;j--){
        str += j + " "
    }
        console.log(str)
}
        Method - 2 


let n = prompt("Enter number of stars..")


for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=n;j++){
        str = j + " " + str
    }
        console.log(str)
}


let n = prompt("Enter number of stars..")

for(let i=n;i>=1;i--){
    let str = ""
    for(let j = n;j>=1;j--){
        str += i +" "
    }
    console.log(str)
}




let n = prompt("Enter number of stars..")

for(let i=n;i>=1;i--){
    let str = ""
    for(let j=1;j<=n;j++){
        str += i + " " 
    }
        console.log(str)
}

*/

let n = prompt("Enter number of stars..")

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=n;j++){
        str += n-i+1 + " " 
    }
        console.log(str)
}