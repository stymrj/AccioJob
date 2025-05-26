/*

let arr = [1,2,["satyam",true,"raj"]];
console.log(arr);
console.log(arr[2]);
console.log(arr[2][0]);

//nested - > unNest using .flat() methods

let nArr = arr.flat();
console.log(nArr);

let arr2 = [1,3,['a','b',[4,5,'satyam',['raj','gupta']]]] 

console.log(arr2);
console.log(arr2[2]);
console.log(arr2[2][2][3][1]);

// unNesting 0of the Nested Array 
let nArr2 = arr2.flat().flat().flat();
console.log(nArr2);

let nArr3 = arr2.flat();
console.log(nArr3)

let nArr4 = nArr3.flat();
console.log(nArr4)

let nArr5 = nArr4.flat();
console.log(nArr5);



let n = prompt("Enter the n: ")
let arr = []

while(n>0){
    let i = Number(prompt("Enter the elements"));
    arr.push(i);
    n--;
}
console.log(arr)


you have to take the inpurt for the nesteed array from ther user




//taken the input to the array
let arr = []
let size = prompt("Enter the size of the Array : ")

for(let i =0;i<size;i++){
    let innerSize = prompt("Enter the size of InnerArray"+i)
    let temp = []
    for(let j=0;j<innerSize;j++){
        let val = prompt("Elements of InnerArray"+j)
        temp.push(val);
    }
    arr.push(temp)
}
console.log(arr);

// printing Method -1 

for(let i =0;i<arr.length;i++){
    let str = ""
    let innerArr = arr[i]

    for(let j=0;j<innerArr.length;j++){
        str += innerArr[j]+" "
    }
    console.log(str)
}

// printing Method - 2
for(let i=0;i<arr.length;i++){
    let str = ""
    for(let j=0;j<arr[i].length;j++){
        str += arr[i][j] + " "
    }
    console.log(str);
}
console.log(arr);

*/

let arr = [[0,1,2,3],[11,99,37,48],[1000,101,152,39],[8,10,157,138]]
let x = 99;
let isFound = false

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(x == arr[i][j]){
            console.log(`Found at ${i} row at ${j} index`)
            isFound = true;
        }
    }
}
if(isFound==false){
    console.log(-1)
}