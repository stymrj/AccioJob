/*

function test(){
    console.log("Hey Satyam!")
}

test();

//Passing Parameters when creating a functions and Calling it by giving some arguments
function info(name,age){
    console.log(`Hey! I am ${name} and my age is ${age}`)
}

info('Satyam Raj',23)
info('Ayush',26)
info('Ankit',25)
info('Rishabh',24)


function add(a,b){
    return a+b;
}

let result = add(5,6); //fxn return something so we have stored in a variable

console.log(result)


function testing(){
    console.log("Bhaiya aap testung me ho..")
    //return 123
}

let val = testing(); //here we are not returing something in our funtion so it will return undefined
console.log(val)

// Functional Expressions

const myFun = function(name,age){
    console.log(name,age)
    return function(){
        console.log("hey!!")
    }
}

let val2 = myFun("qwerty",24)
console.log(val2)

let val3 = val2();
console.log(val3);


// Arrow Function

let bio = (name,age) =>{
    console.log(name,age)
    return 21
}

bio('maytas',24)

let var5 = bio('maytas',24)
console.log(var5)


let fxn = name =>{
    console.log(name)
}

fxn('burrrr')


let fxn1 = name => ("maytasss!")
let fxn2 = name => ("maytasss!")
let fxn3 = function(){
    return 3;
}

function fxn4(){
    console.log("hello from satyam!")
}

function fxn5(name = 'saty', age = 25){
    //console.log("hello from satyam!")
    console.log(name,age)
}

fxn5()
fxn5('satyam',25)
fxn5('satyam',36,true,[])
fxn5('sdfhjkl')




//1. Arrow Function 
const add = (a,b)=>{
    return a+b
}
sum = add(8,7)
console.log(sum)

//2. conventioonal 
function adder(a,b){
    console.log(`sum of ${a} & ${b} is: ${a+b}`)
}

adder(1,3)

// functional expression 

const sum2 = function(a,b){
    return a+b
}

let adder2 = sum2(7,8)
console.log(adder2)



//check even o0r odd

//Method-1
let res = (num)=>{
    if(num%2==0){
        return "Even"
    }else{
        return "Odd"
    }
}


let isEven = res(53)
console.log(isEven)
console.log(res(53))
console.log(res(132))
console.log(res(1))
//Method-2
function checkEvenOdd(num){
    if(num%2==0){
        return "Even"
    }else{
        return "Odd"
    }
}
let bur = checkEvenOdd(123)
console.log(bur)






let area = (a,b)=>{
    return a*b
}
console.log(area(5,6))

function area2(a,b){
    return `Area is ${a*b}`
}

console.log(area2(3,4))






let largest = (a,b)=>{
    if(a>b){
        return a
    }else{
        return b
    }
}
console.log(largest(112,56))


function large(a,b){
    return a>b?a:b
}

console.log(large(12,34))






function UpperCase(name){
    return name.toUpperCase();
}
console.log(UpperCase('satyam'))


let upperCase = (name)=>{
    return name.toUpperCase();
}
console.log(upperCase('gupta'))



function rollDice(){
    let num = Math.floor(Math.random()*10)+1
    return num
}



function print_multipleTable(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} X ${i} = ${n*i}`)
    }
}
print_multipleTable(5);

>>>>>> Printing the sum of the N Natural number

function sum_uptoN(n){
    let sum = 0
    while(n>0){
        sum += n
        n--
    }
    return sum
}
console.log(sum_uptoN(10))

>>>>>> Concat the Elements of an Array using the finction 

let arr = ['Hey!', 'I', 'am', 'Satyam','Gupta']

function concat(){
    let str = ""
    for(let i=0;i<arr.length;i++){
        str += arr[i] + " "
    }
    return str;
}
console.log(concat())

*/