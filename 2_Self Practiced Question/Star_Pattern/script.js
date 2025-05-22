/*
------------------------------------------------------------------------------------
                    JavaScript Nested Loops Practice Questions
------------------------------------------------------------------------------------
*
* *
* * *
* * * *
* * * * *


let n = prompt("Enter n")

for(let i=1;i<=n;i++){
    let str =""
    for(let j=1;j<=i;j++){
        str += "* "
    }
    console.log(str)
}

------------------------------------------------------------------------------------
*
* *
*   *
*     *
* * * * *



let n = prompt("Enter n")

let stars = 1

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=i;j++){
        if(i==n||j==1 || i==j ){
            str += "* "
        }else{
            str += "  "
        }
    }
    console.log(str)
}

------------------------------------------------------------------------------------
* * * * *
* * * *
* * *
* *
*



let n = prompt("Enter n")
let stars = n

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=stars;j++){
        str += "* "
    }
    stars--
    console.log(str)
}

------------------------------------------------------------------------------------

* * * * *
*     *
*   *
* *
*



let n = prompt("Enter Value of n")

let stars = n

for(let i=1;i<=n;i++){
    let str =""
    for(let j=1;j<=stars;j++){
        if(i==1||j==n-i+1||j==1){  // ( j == n - i + 1 )
            str += "* "
        }else{
            str += "  "
        }
    }
    console.log(str)
}

------------------------------------------------------------------------------------

        *
      * *
    * * *
  * * * *
* * * * *



let n = prompt("Enter Value of n")

let spaces = n-1
let stars = 1

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
    spaces--
    stars++
    console.log(str)
}

------------------------------------------------------------------------------------
        *
      * *
    *   *
  *     *
* * * * *



let n = prompt("Enter n: ")
let stars = 1
let spaces = n-1

for(let i=1;i<=n;i++){
    let str = ""
    //spaces
    for(let j = 1;j<=spaces;j++)[
        str += "  "
    ]
    //stars
    for(let k=1;k<=stars;k++){
        if(i==n || k == 1 || k == i  ){ // jab i = 3 and k = 3 hai tab ho rha hai print 
            str += "* "                 // k jab start ho rha hai tab ho rha hai print and n par ho rha h
        }
        else{
            str += "  "
        }
    }
    spaces--
    stars++
    console.log(str)

}
------------------------------------------------------------------------------------
* * * * *
  * * * *
    * * *
      * *
        *
        

let n = prompt("Enter n: ")
let stars = n
let spaces = 0

for(let i=1;i<=n;i++){
    let str =""
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    for(let k=1;k<=stars;k++){
        str += "* "
    }
    stars--
    spaces++
    console.log(str)
}

------------------------------------------------------------------------------------
* * * * *
  *     *
    *   *
      * *
        *



let n = prompt("Enter n: ")
let spaces = 0
let stars = n

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    for(let k =1;k<=stars;k++){
        if(k == 1 || k == stars || i == 1){
            str += "* "
        }else{
            str += "  "
        }
    }
    stars--
    spaces++
    console.log(str)
}

------------------------------------------------------------------------------------

        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *



let n = prompt("enter n")
let stars = 1
let spaces = n-1

for(let i =1;i<=n;i++){
    let str =""
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    for(let k=1;k<=stars;k++){
        str += "* "
    }
    spaces--
    stars+=2
    console.log(str)
}

------------------------------------------------------------------------------------

        *
      *   *
    *       *
  *           *
* * * * * * * * *


let n = prompt("enter n")
let stars = 1
let spaces = n-1

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    for(let k=1;k<=stars;k++){
        if(k==1 || i == n || k == stars){
            str += "* "
        }else{
            str += "  "
        }
    }
    spaces--
    stars+=2
    console.log(str);
}

------------------------------------------------------------------------------------
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        * 


let n = prompt("enter n")
let star = 2 * n - 1
let spaces = 0

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    for(let k=1;k<=star;k++){
        str += "* "
    }
    spaces++
    star-=2
    console.log(str)
}

------------------------------------------------------------------------------------

* * * * * * * * *
  *           *
    *       *
      *   *
        * 


let n = prompt("enter n")
let stars = 2 * n - 1
let spaces = 0

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    for(let k=1;k<=stars;k++){
        if(i==1||k==1||k==stars){
            str += "* "
        }else{
            str += "  "
        }
    }
    spaces++
    stars-=2
    console.log(str)
}

------------------------------------------------------------------------------------
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *



let n = prompt("enter n")

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=n;j++){
        str += "* "
    }
    console.log(str)
}

------------------------------------------------------------------------------------

* * * * *
*       *
*       *
*       *
* * * * *

let n = prompt("enter n")

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=n;j++){
        if(i==1 || j == 1 || i == n || j ==n ){
            str += "* "
        }
        else{
            str += "  "
        }
    }
    console.log(str)
}

------------------------------------------------------------------------------------
* * * * *
* *   * *
*   *   *
* *   * *
* * * * *



let n = prompt("enter n")

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=n;j++){
        if(i==1 || j == 1 || i == n || j ==n || i == j || j == (n-i)+1){
            str += "* "
        }
        else{
            str += "  "
        }
    }
    console.log(str)
}
------------------------------------------------------------------------------------

        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *

let n = prompt("enter n")
let spaces = Math.floor(n/2)
let stars = 1

for(let i=1;i<=n;i++){
    let str = ""
    //spaces
    for(let j=1;j<=spaces;j++){
        str += "  "
    }
    for(let k=1;k<=stars;k++){
        str +="* "
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

*/