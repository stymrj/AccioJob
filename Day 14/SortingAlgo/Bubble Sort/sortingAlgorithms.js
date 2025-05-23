/*
--------------------------------------------------------------------------------------
                                SORTING ALGORITHMS
--------------------------------------------------------------------------------------
1. BUBBLE SORT 
--------------------------------------------------------------------------------------

let arr = [10,5,2,4,15,91,6,1]
console.log(arr)
for(let i=1;i<arr.length-1;i++){ //only keeping track of iterations
    for(let j=0;j<arr.length-1;j++){
    console.log("Bhaiya itna baar loop chala...")
        //swapping
        if(arr[j]>arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        }
    }
}
console.log(arr)
--------------------------------------------------------------------------------------
Not optimized so we will optimize it a little bit..
our loop is running to sorted elemnts whoch hs been at the last 
so we will exclude those from our loop to sort the array 


let arr = [10,5,2,4,15,91,6,1]
console.log(arr)
for(let i=1;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            console.log("Bhaiya itna baar loop chala...")
            //swapping
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr)

--------------------------------------------------------------------------------------
Not optimized so we will optimize it a little bit..
i have added isSwappingDone to check whether the array is sorted
if sorted then we have breaked the loops



//let arr = [10,5,2,4,15,91,6,1]
let arr =[1,2,3,24,5,6,7]
console.log(arr)

for(let i=1;i<arr.length-1;i++){
    let isSwappingDone = false;
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            console.log("Bhaiya itna baar loop chala...")
            //swapping
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            isSwappingDone = true
        }
    }
    if(isSwappingDone == false){
        break;
    }   
}
console.log(arr)

--------------------------------------------------------------------------------------
2. SELECTION SORT 
--------------------------------------------------------------------------------------
*/


let arr = [1,5,12,3,6,2]

for(let i=0;i<arr.length-1;i++){
    let minIdx = i
    for(let j=i;j<arr.length;j++){
        if(arr[j]<arr[minIdx]){
            minIdx = j
        }
    //swapping 
    let temp = arr[i]
    arr[i] = arr[minIdx]
    arr[minIdx] = temp
    }
}
console.log(arr)