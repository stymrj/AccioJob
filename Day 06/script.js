function outer(a){
    console.log("I am outer function..")
    //console.log(a)
    //a()
    function inner(){
        console.log("I am inner function")
    }

    return inner
}

function sample(){
    console.log("hello from Sample!")
}

let val = outer(sample)
//console.log(val)
val()