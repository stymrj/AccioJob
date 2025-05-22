/*

let n = prompt("Enter number Size of the array : ")
let arr = []

for(let i=1;i<=n;i++){
   let m = prompt("Enter the value of elements in array..")
   arr.push(m)
}


let arr = [12,56,7,89,-12,178,34]

let max = arr[0];
let min = arr[0]

for(let j=0;j<arr.length;j++){
    if(arr[j]>max){
        max = arr[j]
    }
}

for(let k=0;k<arr.length;k++){
    if(arr[k]<min){
        min = arr[k]
    }
}

console.log(max)
console.log(min)


let arr = [12,56,7,89,-12,178,34]
let min = arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i]
    }
}
let sum = 0
for(let i=0;i<arr.length;i++){
    sum += arr[i]
}

let avg = sum/arr.length;

console.log(min,sum,avg)



let arr = [12,56,7,89,-12,178,34]
let maxIndex = 0

for(let i=0;i<=arr.length;i++){
    if(arr[i]>arr[maxIndex]){
        maxIndex = i
    }
}
console.log(maxIndex)


let arr = [12,56,7,89,-12,178,34]
let arr2 = [14,64,22,45,77,89,90]

let sum1 = 0
let sum2 = 0

for(let item1 of arr){
    sum1 += item1
}
for(let item2 of arr2){
    sum2 += item2
}

if(sum1==sum2){
    console.log("Both are equal");
}else if(sum1>sum2){
    console.log("First one has greater ");
}else{
    console.log("Second has great!");
}

*/
