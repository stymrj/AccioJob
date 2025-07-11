const obj = {
    name : "Satyam Raj",
    age : 24,
    gender : 'male'
}


console.log(obj)

//coverting
console.log(JSON.stringify(obj))

let val = JSON.stringify(obj)
//console.log(val)
console.log(typeof(val))

let data = JSON.parse(val)
console.log(data.name)
console.log(data.age)


let arr = [1,2,3,4,5]

let jsonData = JSON.stringify(arr)
console.log(jsonData[0])


let newArr = JSON.parse(jsonData)
console.log(newArr[0])