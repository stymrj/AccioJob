/*
                    Recursion


start = 1
let n = 10 
while(start<=n){
    console.log(start)
    start++
}


// Recursion 

function random(n){
    //base case 
    if(n>10){
        return
    }
    console.log(n)
    random(n+1)
}

random(1)

let n = 10
while(n>0){
    console.log(n)
    n--
}


function counting(n){
    //base case 
    if(n<=0){
        return
    }
    //small problem
    console.log(n)
    counting(n-1)
}

counting(10)



//ek ye traika bhi hai 

function random(n){
    if(n>5){
        return
    }
    random(n+1)
    console.log(n)
}
random(1)



Factorial Nikaliyeaaa.........

let n = 5
let fact = 1
for(let i=2;i<=n;i++){
    fact *= i
}
console.log(fact)


let ans = 1
function fact(n){
    // base case 
    if(n<1){
        console.log(ans)
        return 
    }
    ans *= n
    // small problem
    fact(n-1)
}
fact(5)

Method - 2
*/

function fact(n){
    // base case 
    if(n<1){
        return 1
    }
    // small problem
    return n * fact(n-1)
}
let ans = fact(5)
console.log(ans)