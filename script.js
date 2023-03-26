const colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function conflicting(){
    const card = document.getElementById('one');
    const confettiAmount = 2000;

    for (let i = 0; i < confettiAmount; i++) {
        let dot = document.createElement("div");
        dot.className = "confetti";
        dot.style.setProperty("--endX", random(-300, 300) + "px");
        dot.style.setProperty("--endY", random(-200, 200) + "px");
        dot.style.setProperty("--s", random(0.5, 1) + "");
        dot.style.setProperty("--color", colors[random(0, 4)]);
        card.appendChild(dot);
    }
}



let btn = document.getElementById('btn');
let msg1 = document.getElementById('msg1');
let msg2 = document.getElementById('msg2');
let msg3 = document.getElementById('msg3');

let ans = Math.floor(Math.random() * 100) + 1;

let score = 0;
let guessNum = [];

function play() {
    let inputNumber = document.getElementById('inputNumber').value;
    if(inputNumber < 1 || inputNumber > 100){
        alert("Please enter the number between 1 to 100");
    }
    else{
        guessNum.push(inputNumber);
        score += 1;
        if(inputNumber < ans){
            msg1.textContent = "Your guess is low";
            msg2.textContent = "No of guess: "+ score;
            msg3.textContent = "Guessed Number Are: " + guessNum;
        }
        else if(inputNumber > ans){
            msg1.textContent = "Your guess is high";
            msg2.textContent = "No of guess: "+ score;
            msg3.textContent = "Guessed Number Are: " + guessNum;
        }
        else if(inputNumber == ans){
            conflicting();
            msg1.style.color = "red";
            msg1.textContent = "OOww...! You Own The Game... 😊";
            msg2.textContent = "the number is the: "+ ans;
            msg3.style.color = "Green";
            msg3.textContent = "Your scoor is the: "+(100 - score);
        }
    }
}

