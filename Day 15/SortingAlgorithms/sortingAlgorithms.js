/*
We have given two sorted Array and we have to merge both without any sorting and merging technique

let arr1 = [11,22,44,101,500]
let arr2 = [1,30,53,102]

let i=0
let j=0
let ans = []

while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        ans.push(arr1[i])
        i++
    }else{
        ans.push(arr2[j])
        j++
    }
}

if(i<arr1.length){
    for(let k=i;k<arr1.length;k++){
        ans.push(arr1[k])
    }

}else if(j<arr2.length){
    for(let k=j;k<arr2.length;k++){
        ans.push(arr2[k])
    }
}

console.log(ans)
--------------------------------  INSERTION SORT  -------------------------------


let arr = [10,2,-79,55,12,100,3]

for(let i = 0;i<arr.length-1;i++){
    for(let j= i+1;j>0;j--){
        if(arr[j-1]>arr[j]){
            let temp = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr)


--------------------------------  Searching in Array  -------------------------------



let arr = [10,2,-79,55,12,100,3]
let key = prompt("enter key!")
let isFound = false;

console.log(arr)


for(let i=0;i<arr.length;i++){
    if(arr[i]==key){
        isFound = true
        console.log(`Present on ${i} index`)
    }
}

if(isFound==false){
    console.log(-1)
}

-------------------- Median of Two Sorted Arrays -------------------------------- 

var findMedianSortedArrays = function(nums1, nums2) {
    let i=0
    let j=0
    let ans = []

    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            ans.push(nums1[i])
            i++
        }
        else{
            ans.push(nums2[j])
            j++
        }
    }

    if(i<nums1.length){
        for(let k=i;k<nums1.length;k++){
            ans.push(nums1[k])
        }
    }
    if(j<nums2.length){
        for(let k=j;k<nums2.length;k++){
            ans.push(nums2[k])
        }
    }

    // above we hvae merged two sorted array 
    // now we will find median
    if(ans.length%2==0){
        let idx1 = ans.length/2
        let idx2 = (ans.length/2)-1
        let median = (ans[idx1]+ans[idx2])/2
        return median
    }
    else{
        let idx = Math.floor(ans.length/2)
        let median = ans[idx]
        return median
    }
};

-------------------- Binary Search -------------------------------- 
*/

let arr = [1,2,3,4,5,6,7,8,9]
let x = 10

let start = 0
let end = arr.length-1
let isFound = false;

while(start<=end){
    let mid = Math.floor((start+end)/2)
    if(arr[mid]==x){
        isFound = true
        console.log(`present at ${mid}`)
        break
    }else if(x>arr[mid]){
        start = mid + 1
    }else{
        start = mid - 1
    }
}
if(isFound==false){
    console.log(-1)
}

//we can use this to print -1 as well rather than using flag (extra variable)

if(start>end){
    console.log(-1)
}