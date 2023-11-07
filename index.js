let panelBottom=document.querySelector("#panelBottom");
// console.log(panelBottom)
let allBubbles="";
let remainingTime=60;
let score=0;
let hitRandomNumer

function createBubbles(){
    for (let i = 0; i < window.screen.width; i++) {
        let randomNumber=Math.floor(Math.random()*10);
        allBubbles+=`<div class="bubble">${randomNumber}</div>`
    }
    panelBottom.innerHTML=allBubbles;
}

function runTimer(){
    let timer= setInterval(function(){
        if(remainingTime>0)
        {
            remainingTime--;
            document.querySelector("#timerValue").textContent=remainingTime;
        }
        else{
            clearInterval(timer)
            panelBottom.innerHTML=`<div>GAME OVER</div>`
        }
    },1000)
}

function hitValue(){
    hitRandomNumer=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitRandomNumer;
}

function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}

panelBottom.addEventListener("click",function(val){
    let bubbleNumber= Number(val.target.textContent);
    if(bubbleNumber===hitRandomNumer)
    {
        increaseScore();
        createBubbles();
        hitValue();        
    }
})


createBubbles();
runTimer();
hitValue();
