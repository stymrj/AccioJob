/*
                Scoping in JavaScript
--------------------------------------------------------------------------------
    1. Global Level  Valid for all (let,const,var)

        var a = 10
        let b = 20
        const c = 30

        for(let i=1;i<1000000;i++){

        }

        console.log(a)
        console.log(b)
        console.log(c)


//      BLOCK LEVEL Not for (let,const) ONly valid for Var



        for(let i=1;i<1000000;i++){
            var a = 10
            let b = 20
            const c = 30
            //console.log(a,b,c)
        }
        console.log(a)
        console.log(b)
        console.log(c)


        Functional Scope -> Not for (let,const,var) 
*/

function random(){
    var a = 10
    let b = 20
    const c = 30
    // console.log(a,b,c)
}
    random()
    console.log(a)
    console.log(b)
    console.log(c)

