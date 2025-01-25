let gameseq =[];
let userseq =[];
let btns = ["yellow","green","purple","red"]

let started = false;
let level =0;
let h3 = document.querySelector("h3");

document.addEventListener ("keypress",function(){
    if(started == false)
    {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function levelUp()
{  
    userseq = [];
    level++;
    h3.innerText = `next Level ${level}`;
    let randomIndex = Math.floor(Math.random() *3);
    let randomColor = btns[randomIndex];
    let rndBtn = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    console.log(gameseq);
    btnFlash(rndBtn);
}

function btnFlash(btn) {
 btn.classList.add("flash");
 setTimeout(function(){
 btn.classList.remove("flash");
 },1000);
}

function checkAns(indx)
{    
    if(userseq[indx] === gameseq[indx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }}
    else
    {
    h3.innerHTML =`Game over your score was <b>${level}</b> </br>! press any key to start the game`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor ="white";
    },150)
    reset();
}
} 

function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{   started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

