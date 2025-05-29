let obj = {
    name : 'satyam',
    age : 24,
    username : '@satyamraj',
    email : 'sstymrj@gmail.com'
}
console.log(obj);
// two methods to access the objects in js
// dot operator (obj.key) & square bracket (obj['key'])

console.log(obj.name);
console.log(obj.age);
console.log(obj.username);
console.log(obj.email);


console.log(obj['name'])
console.log(obj['age'])
console.log(obj['username'])
console.log(obj['email'])

//Adding and Removing properties in objects

let animal = {}
console.log(animal)

animal.leg = 4
animal['name'] = 'dog';
console.log(animal)

delete animal['leg']
console.log(animal)

delete animal.name
console.log(animal)


// Looping in Objects...

let admin = {
    name : 'Satyam Gupta',
    age : 24,
    email : 'admin@satyamraj.live'
}

console.log(admin["name"])
// for accessing the all the values in the object 

for(let item in admin){
    //console.log("item")
    //console.log(item)
    // console.log(obj['item'])
    console.log(obj[item])
}
