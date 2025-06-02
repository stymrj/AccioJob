/*
function parent(){
    var a = 20
    return function(){
        console.log(a)
    }
}
var fn = parent()
fn()

function outer(){
    var a = 'qwerty'
    function inner(){
        console.log(a)
    }
    return inner
}
let fn2 = outer()
fn2();


------------------------------ Counter Application -----------------------------


function counter(operation){
    let count = 0
    if(operation == 'inc'){
        return function(){
            count++
            console.log(count)
        }

    }
    if(operation == 'dec'){
        return function(){
            count--
            console.log(count)
        }
        
    }
    if(operation == 'res'){
        return function(){
            count = 0
            console.log(count)
        }
    }
}

let increment = counter('inc')
let decrement = counter('dec')
let reset = counter('res')


// increment()
// decrement()
// reset()

*/

function counter(){
    var count = 0
    return {
        increment : ()=>{
            count++
            console.log(count)
        },
        decrement : ()=>{
            if(count == 0){
                console.log(count)
                return 
            }
            count--
            console.log(count)
        },
        reset : ()=>{
            count = 0
            console.log(count)
        }
    }
}

let counterObj = counter();
counterObj.decrement()
