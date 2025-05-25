/*
        To_DO App
        1. Add
        2. list
        3. Delete
        4. Quit

let req = prompt("Choose your Request \n 1. Add \n 2. List \n 3. Delete \n 4. Quit")
let task = []

while(true){
    if(req == 4){
        console.log("Quittting....")
        break;
    }else if(req == 1){
        let add = prompt("Enter the task you want to add in list..")
        task.push(add);
    }else if(req == 2){
        console.log("----- Task you have to do --------");
        for(let i=1;i<=task.length;i++){
            console.log(`${i}. ${task[i]}`);
        }
        console.log("----------------------------------");
    }else if(req ==3){
        let idx = prompt("Please enter task Index to delete")
        task.splice(idx,1)
    }else{
        console.log("wrong request...")
    }
    req = prompt("Choose your Request \n 1. Add \n 2. List \n 3. Delete \n 4. Quit")
}


User select a range, and our code generate a random number and user guess and if he win congrutulate him..or quit
*/

const range = prompt("Enter the range like upto...?")
const randomNum = Math.floor(Math.random()*range)+1;

console.log("Random Number was: ",randomNum)
let guessNum = prompt("Guess a number...")

while(true){
    if(guessNum == "quit"){
        console.log("Quitting...")
        break;
    }
    if(guessNum==randomNum){
        console.log("Hurray!! You won..")
        break;
    }else if(guessNum<randomNum){
        guessNum = prompt("Ooopss!! Guess Again... \n Hint: You have guessed a small number")
    }else if(guessNum>randomNum){
        guessNum = prompt("Ooopss!! Guess Again... \n Hint: You have guessed a Larger number")
    }else{
        console.log("try Again..")
    }
}
