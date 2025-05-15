/*

let n = prompt("enter no of rows: ")


for(let i=1;i<=n;i++){
    let str = ""
    for(let j = 1;j<=n;j++){
        str += "* "
    }
    console.log(str)
}
---------------------------------------------------------------------------------------



let n = prompt("enter no of rows: ")

for(let i=0;i<=n;i++){
    let ans = ""
    for(let j=1;j<=i;j++){
        ans += "* "
    }
    console.log(ans)
}



*
* * 
* * * 
* * * * 
* * * * * 




let n = prompt("enter no of rows: ")

let rows = n
let stars = 1

for(let i = 1; i<=rows;i++){
    let str = ""
    for(let j=1;j<=stars;j++){
        str += "* "
    }
    stars++
    console.log(str)
}
---------------------------------------------------------------------------------------

* * * * * 
* * * * 
* * * 
* * 
* 



let n = prompt("enter no of rows: ")

for(let i=1;i<=n;i++){
    let ans = ""
    for(let j=i;j<=n;j++){
        ans += "* "
    }
    console.log(ans)
}

---------------------------------------------------------------------------------------
* * * * * 
* * * * 
* * * 
* * 
* 



let n = prompt("enter no of rows: ")

let rows = n;
let stars = n

for(let i=1;i<=rows;i++){
    let str = ""
    for(let j=1;j<=stars;j++){
        str += "* "
    }
        stars--
    console.log(str)
}

---------------------------------------------------------------------------------------
* * * * * 
* * * * 
* * * 
* * 
* 




let n = prompt("Enter n: ")

let rows = n
let stars = n

for(let i=1;i<=rows;i++){
    let str = ""
    for(let j=1;j<=n-i+1;j++){  // j <= n-i+1 --> 5 <= 5-1+1 
        str += "* "
    }
    console.log(str)
}



let n = 5;
let stars = n
let rows = n

for(let i= rows;i>=1;i--){
    let str = ""
    for(let j=1;j<=i;j++){
        str += "* "
    }
    stars--
    console.log(str)
}



let n = prompt("Enter n: ")

let rows = n
let stars = 1
let spaces = n-1 // 3 = 5 -n- i

for(let i=1;i<=rows; i++){
    let str =""
    // for spaces
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    spaces--
    // for stars
    for(let k=1;k<=stars;k++){
        str += "* "
    }
    stars++
    console.log(str)
}



let n = prompt("Enter n: ")

let space = n-1
let stars = 1

for(let i=1;i<=n;i++){
    let str = ""

    //for spaces
    for(let j=1;j<=space;j++){
        str += "  "
    }
    space--

    // for stars

    for(let k=1;k<=stars;k++){
        str += "* "
    }
    stars++
    console.log(str)
}


----------------------------------------------------------------------------------------

* * * * * 
  * * * * 
    * * * 
      * * 
        * 




let n = prompt("enter n: ")

let rows = n
let stars = n
let space = 0

for(let i=1;i<=rows;i++){
    let str =""
    //spaces
    for(let j=1;j<=space;j++){
        str += "  "
    }
    space++
    //stars 
    for(let k=1;k<=stars;k++){
        str += "* "
    }
    stars--
    console.log(str)
}



let n = prompt("enter n")

let rows = n
let spaces = n-1
let stars = 1

for(let i=1;i<=rows;i++){
    let str = ""
    //spaces
    for(let j=1;j<=spaces;j++){
        str += " "
    }
    spaces--
    //stars
    for(let k=1;k<=stars;k++){
        str += " *"
    }
    stars++
    console.log(str)
}



let n = 151
let count = n.toString().length;
let sum = 0
let cpy = n



while(n>0){
    let lastDigit = n%10
    sum += Math.pow(lastDigit,count)
    n = Math.floor(n/10)
}

console.log(cpy)
console.log(sum)

if(cpy==sum){
    console.log("Armstrong")
}else{
    console.log("Not..")
}



let m = 0
let n = 160

for(let i=m;i<=n;i++){
    let sum = 0
    let currNum = String(i)
    let power = currNum.length

    for(let j=0;j<currNum.length;j++){
        //sum += currNum[j] ** power
        sum += Math.pow(currNum[j],power)
    }
    if(sum==currNum){
        console.log(currNum)
    }
}




let m = 1
let n = 1200

for(let i=m;i<=n;i++){
    let sum = 0
    let currNum = String(i)
    let power = currNum.length;

    for(let j=0;j<currNum.length;j++){
        sum += currNum[j]**power
    }

}



let m = 1
let n = 1200

for(let i=m;i<=n;i++){
    let sum =0
    let currNum = String(i);
    let power = currNum.length;

    for(let j=0;j<currNum.length;j++){
        sum += Math.pow(currNum[j],power)
    }
    if(sum==currNum){
        console.log(currNum)
    }
}
    

============================== Practice ===========================================

let n = prompt("Enter")

let satrs= 1
let rows = n
let spaces = n-1

for(let i=1;i<=n;i++){
    let str =""
        //spaces
    for(let k=1;k<=spaces;k++){
        str +=" "
    }
    spaces--
    // stars 
    for(let j=1;j<=satrs;j++){
        str += "* "
    }
    satrs++
    console.log(str)
}





let d = Number(prompt("Enter number of days:"))

let year = Math.floor(d/365)
let remDays = d%365
let month = Math.floor(remDays/30)
let days = remDays%30

console.log(`${year} year ${month} months ${days} days`)



let day = prompt("Enter Day")
let month = prompt("Enter Month")
let year = prompt("Enter Year)

if(month ==  1|| month ==  3|| month ==  5|| month == 7 || 
    month == 8 || month == 10 || month == 12 ){
    if(day>=1 && day <=31){
        console.log("Valid")
    }else{
     console.log("Invalid")       
    }
}else if(month == 4 || month ==  6|| month == 9 || month == 11 ){
    if(day>=1 && day <=30){
        console.log("Valid")
    }else{
     console.log("Invalid")       
    }

}else if(month = 2){
    if(year%4 == 0 && year%100 != 0 || year % 400 == 0){
        console.log(29)
        if(day>=1 && day <=29){
        console.log("Valid")
    }else{
     console.log("Invalid")       
    }
    }else{
        console.log(28)
        if(day>=1 && day <=28){
        console.log("Valid")
    }else{
     console.log("Invalid")       
    }
    }

}else{
    console.log("Invalid")
}




1
2 3 
4 5 6 
7 8 9 10


*/

let n = prompt("Enter n")

let rows = n

for(let i=1;i<=rows;i++){
    let str = ""
    for(let j=i;j<=n;j++){
        str += "* "
    }
    console.log(str)
}










