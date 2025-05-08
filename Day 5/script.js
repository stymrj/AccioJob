/* 
------------------------ Prime Number or Not ? ----------------------------


let n = 3456;
let start = 2
let isprime = true

//while(start<n){                   //approach-1
//while(start<=n/2){                      //approach-2
    while(start * start <= n){                   //approach-3
    if(n%start==0){
        isprime = false;
        console.log(n + " is not prime..")
        break
    }
    start++
}
if(isprime==true){
    console.log(n+" is prime..")
}


------------------------ Calcualting Power Of A Number ----------------------------


let a = 5;
let b = 3;
let start = 1;
let ans = 1

while(start<=b){
    ans *= a;
    start++; 
}
console.log("Power is "+ans);


------------------------ Calcualting digitSum Of A Number ----------------------------


function sumOfDigits(n){
    let sum = 0;
    while(n>0){
        let lastDigit = n%10;
        sum += lastDigit;
        n = Math.floor(n/10)
    }
    return sum;
}
console.log(sumOfDigits(5216));

------------------------ printingStars ----------------------------

* * * * *
*
*
*
*
*



let n  = 5;
let start = 1;

let horStr = ""
let verStr = ""

while(start<=n){
    horStr += "* "
    verStr += "*" + "\n"
    start++
}
console.log(horStr);
console.log(verStr);



------------------------ Palindrome Number ----------------------------

let n = 4554;
let temp = ""
let originalNumber = n;

while(n>0){
    let lastDigit = n%10;
    temp += lastDigit
    n = Math.floor(n/10)
}

if(originalNumber==temp){
    console.log(true)
}else{
    console.log(false)
}


------------------------ Reverse Number ----------------------------


let n = 1000;

let temp = ""

while(n>0){
    let lastDigit = n%10;
    temp += lastDigit;
    n = Math.floor(n/10);
}
console.log(Number(temp));


------------------------ GCD of Two Number ----------------------------


let a = 75
let b = 90

let min = Math.min(a,b);
let max = Math.max(a,b)

while(max%min != 0){
    let rem = max%min

    if(rem!=0){
        max = min
        min = rem
    }
}
console.log(min);


----------------
Approach - 2



let a = 75
let b = 90
let start = 1;
let ans = start

while(start<=a && start <= b){
    if(a%start == 0 && b%start == 0){
        ans = start
    }
    start++
}
console.log(ans)
*/

let a = 75 
let b = 90

let max = Math.max(a,b)
let min = Math.min(a,b)

while(max%min!=0){
    let rem = max%min;
    if(rem!=0){
        max = min
        min = rem
    }
}
console.log(min)
