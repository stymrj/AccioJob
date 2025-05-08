/*
---------------------- Printing multiple table of n ----------------------

let n = 22

for(let i=1;i<=10;i++){
    console.log(n +" X " + i + " = " + n * i)
}

---------------------- Sum of numbers upto n ----------------------

let n = 101
let sum = 0

for(let i = 1; i<=n;i++){
    sum += i
}
console.log("Sum is :"+sum)


---------------------- Sum of Multiples of 5 upto n ----------------------


let n = Number(prompt("Enter the number: "))
let sum = 0

Method-1

for(let i=5;i<=n;i+=5){
    sum += i
}
console.log("Sum is :"+sum)
--------------------------------------- TC : O(n/5)
Method-2

let n = Number(prompt("Enter the number: "))
let sum = 0

for(let i=1;i<=n;i++){
    if(i%5==0){
        sum += i
    }
}
console.log("Sum is :"+sum)

--------------------------------------- TC : O(n)


let str = prompt("enter your word: ")
let target = prompt("enter your word: ")
let count = 0

for(let i = 0; i<str.length;i++){
    if(str[i]==target){
        count++;
    }
}
console.log(target + " is repetaed " + count + " times")


---------------------- Palindrome ----------------------


let str = prompt("enter: ")
let rev = ""

for(let i = str.length-1; i>=0;i--){
    rev += str[i]
}
console.log(rev)

if(rev==str){
    console.log("palindrome..")
}else{
    console.log("not palindrome..")
}


//          Method-2

for(let i = 0; i<str.length;i++){
    rev = str[i] + rev
}

console.log(rev)

if(rev==str){
    console.log("palindrome..")
}else{
    console.log("not palindrome..")
}



let n = prompt("Enter the number: ")
let ans = 1

for(let i = 1; i<=n; i++){
    ans *= i
}
console.log(ans)



let n = Number(prompt("Enter the Number: "));
let isPrime = true

for(let i =2;i*i<=n;i++){
    if(n%i==0){
        console.log("Not a prime number..")
        isPrime = false
        break
    }
}

if(isPrime == true){
    console.log("Prime Number")
}

*/

let n = Number(prompt("Enter Range:"));

if(n%2==0){
    console.log(`This has ${n/2} even and odd number.`)
}
else{
    let evenCount = Math.floor(n/2)
    let oddCount = Math.floor(n/2)+1
    console.log(`It has ${evenCount} even numbers and ${oddCount} odd numbers`)
}
