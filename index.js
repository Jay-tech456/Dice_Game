
const func = () => { 
    let randomNumber1 = Math.floor(Math.random() * 6) + 1
    return "images/dice" + randomNumber1 + ".png" 

}

let a = func()
let b = func()
document.querySelectorAll("img")[0].setAttribute("src", a)
document.querySelectorAll("img")[1].setAttribute("src", b)


let content; 

if(a < b){
    content = "Player 2 won" 

} else if (b < a){ 
    content = "Player 1 won"
} else { 
    content = "It is a tie"
}

document.querySelector("h1").innerHTML = content
