const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const currentE0=document.querySelector('#current--0');
const currentE1=document.querySelector('#current--1');
const diceE=document.querySelector('.dice');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const newbtn=document.querySelector('.btn--new');
const rollbtn=document.querySelector('.btn--roll');
const holdbtn=document.querySelector('.btn--hold');

let activplayer,currentscore,score,playing;
const init=function(){
    activplayer=0;
    currentscore=0;
    playing=true;
    score=[0,0];
    
    score0.textContent=0;
    score1.textContent=0;
    currentE0.textContent=0;
    currentE1.textContent=0;
    
    diceE.classList.add('hidden');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('win');
    player1.classList.remove('win');
}
init();

const switchplayer=function(){
    document.getElementById(`current--${activplayer}`).textContent=0;
    currentscore=0;
    activplayer=activplayer===0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

    
}

rollbtn.addEventListener('click',function(){

    if(playing){
    dice=Math.trunc(Math.random() * 6)+1;
    diceE.classList.remove('hidden');
    diceE.src=`./img/dice-${dice}.png`;

    if(dice !== 1){
        currentscore+=dice;
        document.getElementById(`current--${activplayer}`).textContent=currentscore;
    }else{
        switchplayer();
    }
}
});


holdbtn.addEventListener('click',function(){
    if(playing){
        diceE.classList.add('hidden');
        score[activplayer]+=currentscore;
        document.getElementById(`score--${activplayer}`).textContent=score[activplayer];

    if(score[activplayer]>=100){
        playing=false;

        document.querySelector(`.player--${activplayer}`).classList.add(`win`);
        document.querySelector(`.player--${activplayer}`).classList.add(`player--active`);
    }else{
        switchplayer();
    }
}
});

newbtn.addEventListener('click', init);