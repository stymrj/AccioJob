/*

let n = 5

let rows = n

let stars = 1
let spaces = Math.floor(n/2)


for(let i =1;i<=rows;i++){
    let str = ""
    //spaces
    for(let j=1;j<=spaces;j++){
        str += "  "
    }

    for(let k=1;k<=stars;k++){
        str += "* "
    }
    
    if(i< n/2){
        spaces--
        stars+=2
    }else{
        spaces++
        stars-=2
    }

    console.log(str)
}
-----------------------------------------------------------------------


let n = prompt("enter n: ")

let spaces = Math.floor(n/2)
let stars = 1

for(let i=1;i<=n;i++){
    let str = ""

    // for spaces
    for(let j=1;j<=spaces;j++){
        str += "  "
    }

    // for stars 
    for(let k=1;k<=stars;k++){
        str += "* "
    }

    if(i<n/2){
        spaces--
        stars+=2
    }else{
        spaces++
        stars-=2
    }
    console.log(str)
    

}

--------------------------------------------------------------------------------------

let n = prompt("enter n: ")

let stars = n
let spaces = 0

for(let i=1;i<=n;i++){
    let str = ""
    //spaces
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    //stars
    for(let k=1;k<=stars;k++){
        str += "* "
    }
    if(i<n/2){
        spaces++
        stars-=2
    }else{
        spaces--
        stars+=2
    }
    console.log(str)
}


--------------------------------------------------------------------------------------

let n = prompt("enter n: ")

let spaces= 0
let stars = n

for(let i=1;i<=n;i++){
    let str =""
    for(let k =1;k<=spaces;k++){
        str += "  "
    }
    for(let j=1;j<=n;j++){
        str +="* "
    }
    spaces++
    console.log(str)
}

--------------------------------------------------------------------------------------

let n = prompt("enter n: ")

let stars = n

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=stars;j++){
        str += "* "
    }
    if(i< n/2){
        stars-=2
    }else{
        stars+=2
    }
    console.log(str)
}
--------------------------------------------------------------------------------------


let n = prompt("Enter n ")

let spaces = 0
let dots = n

for(let i=1;i<=n;i++){
    let str = ""
    //for spaces
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    //for dots
    for(let k=1;k<=dots;k++){
        str += ". "
    }
    if(i<n/2){
        spaces+=2
        dots-=2
    }else{
        spaces-=2
        dots +=2
    }
    console.log(str)
}
-------------------------------------BUTTERFLY---------------

let n = prompt("enter n")
let stars= 1

let spaces = 2 * n - 3

for(let i=1;i<2*n;i++){
    let str = ""
    //stars
    for(let j=1;j<=stars;j++){
        str += "* "
    }
    //spaces
    for(let k=1;k<=spaces;k++){
        str += "  "
    }
    //stars
    for(let m=1;m<=stars;m++){
        if(i==n && m == stars){
            break
        }
        str += "* "
    }
    if(i<n){
        stars++
        spaces-=2
    }else{
        stars--
        spaces+=2
    }
    console.log(str)
}

----------------------------------------------------

let n = prompt("enter n")
let stars= 1
let spaces = 2*n-3

for(let i=1;i<=n;i++){
    let str = ""
    //stars
    for(let m=1;m<=stars;m++){
        str += "* "
    }
    //spaces
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    //stars
    for(let k=1;k<=stars;k++){
        if(i==n && k == stars){
            break
        }
        str += "* "
    }
    spaces-=2
    stars++


    console.log(str)
}

*/


let n = 5
let stars = n
let spaces = -1

for(let i=1;i<=n;i++){
    let str =""
    //stars
    for(let j = 1;j<=stars;j++){
        if(i==1 && j == stars){
            break
        }
        str += "* "
    }
    // spaces
    for(let k=1;k<=spaces;k++){
        str += "  "
    }
    // stars
    for(let m=1;m<=stars;m++){
        str += "* "
    }
    stars--
    spaces+=2
    console.log(str)
}