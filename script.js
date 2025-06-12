let RPS = document.querySelectorAll(".img");
let winbox = document.querySelector(".winner");
let me = document.querySelector(".my-score");
let bot = document.querySelector(".bot-score");
let Reset = document.querySelector(".reset");

let myScore = 0;
let computerScore = 0;


// My Choice
RPS.forEach((img) => {
    img.addEventListener("click", () => {
        const myValue = img.getAttribute("id");
        playGame(myValue);
    })
})

// Computer's Choice 
const computerValue = () => {
    const option = ["rock", "paper", "scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return option[randomidx];
}

// Printing Both Value
const playGame = (myValue) => {
    console.log("my choice =", myValue);
    const computervalue = computerValue();
    console.log("computer's Choice =", computervalue);
    if ( myValue === computervalue) {
        draw();
    }
    else {
        let onewin = true;
        if(myValue === "rock") {
            onewin = computervalue === "paper" ? false:true;
        }
        else if(myValue === "paper") {
            onewin = computervalue === "scissor" ? false:true;
        }
        else {
            onewin = computervalue === "rock" ? false:true;
        }
        won(onewin);
    }
}

const draw = () => {
    console.log("draw");
    winbox.innerText = "Draw";
}

const won = (onewin) => {
    if(onewin === true) {
        console.log("you won the game");
        winbox.innerText = "You Won";
        myScore +=1;
        me.innerText = myScore;
    }
    else {
        console.log("computer won the game");
        winbox.innerText = "Computer Won";
        computerScore +=1;
        bot.innerText = computerScore;
    }
}

const resetgame = () => {
    me.innerText = "0";
    bot.innerText = "0";
}
Reset.addEventListener("click", resetgame);