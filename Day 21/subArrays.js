/*
let arr = [1,2,3,4,5]
let n = arr.length
for(let i=0;i<n;i++){
    let temp = []
    for(let j=i;j<n;j++){
        temp.push(arr[j])
        console.log(temp)
    }
}


pending to understand
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let n = 3 //subArraySize
let s = 6 //sumOfSubArrays


function solve(arr, n, s) {
  // Write your code here
  for(let i=0;i<=arr.length-n;i++){
    let temp = []
    for(let j=i;j<i+n;j++){
      temp.push(arr[j])
    }
    let sum = 0
    for(let item of temp){
      sum += item
    }

    if(sum==s){
      console.log("YES")
      return
    }
  }
  console.log("NO")
}



let n = 6
for(let i=1;i<=n;i++){
    let str = ''
    for(let j=1;j<=i;j++){
        if(j%2!=0){
            str += '1' + ' '
        }else{
            str += '0' + ' '
        }
    }
    console.log(str)
}



let n = 6
for(let k=1;k<=n;k++){
    let str2 = ''
    let val = 1
    for(let j=1;j<=k;j++){
        str2 += val
        if(val == 1){
            val = 0
        }else{
            val = 1
        }
    }
    console.log(str2)
}
----------------------------------------------------------
1
01
010
1010
10101
010101



let val = 1
let n = 6
for(let k=1;k<=n;k++){
    let str2 = ''
    for(let j=1;j<=k;j++){
        str2 += val
        if(val == 1){
            val = 0
        }else{
            val = 1
        }
    }
    console.log(str2)
}

*/

let arr = [1,7,22,3,6,39,27,67,54]
let max = arr[0]
let secMax = arr[0]


for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        secMax = max
        max = arr[i]
    }else if(secMax<arr[i]){
        secMax = arr[i]
    }
}
console.log(secMax)