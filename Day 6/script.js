/*

// do-while loop

let s = 123

do{
    console.log("Okay!!")
    s++
}while(s<=12)


let n = prompt("Enter number: ")
let start = 1

do{
    if(start%5==0){
        console.log(start)
        
    }
    start++
}while(start<=n)



---------------------------- FizzBuzz ------------------------------
let end = prompt("Enter Number:")

let start = 1

do{
    if(start%3==0 && start%5==0){
        console.log("FizzBuzz")
    }
    else if(start%3==0){
        console.log("Fizz")
    }else if(start%5==0){
        console.log("Buzz")
    }else{
        console.log(start)
    }
    start++
}while(start<=end)



// printing name 100 times
for(let i = 1; i<= 100; i++){
    console.log("Satyam")
}
// printing number from 1 to 10
for(let j = 1; j<=10;j++){
    console.log(j)
}
// printing number from 10 to 1
let n = prompt("Enter Number: ")
for(let k = n; k>=1; k--){
    console.log(k)
}

// printing number from 10 to 1
let n = prompt("Enter Number: ")
for(let i = 1;i<=n;i++){
    if(i%2==0){
        console.log(i)
    }
}

console.log("Odd Numbers are : ")
//printing Odd NUmbers by approach 2
for(let j = 1;j<=n;j+=2){
    {
        console.log(j)
    }
}




let end = prompt("Enter number: ")

for(let start=1;start<=end;start++){
    if(start%3==0 && start%5==0){
        console.log("FizzBuzz")
    }
    else if(start%3==0){
        console.log("Fizz")
    }else if(start%5==0){
        console.log("Buzz")
    }else{
        console.log(start)
    }
}


//-------------------------------------------------- accending order

let start1 = Number(prompt("Enter Start: "))
let end2 = Number(prompt("Enter end"))

for(let j=start1;j<=end2;j++){
    console.log(j)
}

//-------------------------------------------------- decending order

let end = prompt("Enter end")
let start = prompt("Enter Start: ")


for(let i=end;i>=start;i--){
    console.log(i)
}



let n = prompt("Enter No of stars");
let stars =""
let str = ""

for(let i = 1; i<=n;i++){
    stars += "*\n"
    str += "* "
}
console.log(stars)
console.log(str)


let n = prompt("Enter a number: ")

// for(let i =1; i<=n;i++){

// }

let sum = 0
let pw = n.length;
while(n>0){
    let lastDigit = n%10;
    sum += Math.pow(lastDigit,pw)
    n = Math.floor(n/10)
}
console.log(sum)

if(n==sum){
    console.log("Armstring number")
}else{
    console.log("Not...")
}



let str = "qwertyuiop"
let end = str.length-1

while(end>=0){
    console.log(str[end])
    end--;
}

// for(let end = str.length-1; end>=0; end--){
//     console.log(str[end])
// }

// do{
//     console.log(str[end])
//     end--;
// }while(end>=0)




let str = "satyam"
let rev = ""
let len = str.length-1

while(len>=0){
    rev += str[len]
    len--
}
console.log(rev)

*/

let str = "satyam"
let rev = ""

let start = 0

while(start<str.length){
    rev = str[start] + rev
    start++
}

console.log(rev)