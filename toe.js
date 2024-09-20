const boxes=document.querySelectorAll('.box');
const gstatus=document.querySelector('#status');
const btnrestart=document.querySelector('#restart');
let x="<img src='x.png' style='height:70px;' style='width:70px;'>";
let o="<img src='o.png' style='height:70px;' style='width:70px;'>";
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let option=["","","","","","","","",""];
let currentplayer=x;
let player="X";
let running=false;
init();
function init(){
    boxes.forEach(box=>box.addEventListener('click',boxclick));
    running=true;
    btnrestart.addEventListener('click',restartgame);
    gstatus.textContent=player+ " Your Turn";


}

function boxclick(){
    const index=(this.dataset.index);
    if(option[index]!="" || !running){
        return;
    }
    updatebox(this,index);
    checkwinner();

}
function updatebox(box,index){
    option[index]=player;
     box.innerHTML=currentplayer;


}
function checkwinner(){

    let iswon=false;
    for(let i=0;i<win.length;i++){
        const condition=win[i];
        box1=option[condition[0]];
        box2=option[condition[1]];
        box3=option[condition[2]];
        if(box1==""||box2==""||box3==""){
            continue;
        }

        if(box1==box2 && box2==box3){
            iswon=true;
        boxes[condition[0]].classList.add('win');
        boxes[condition[1]].classList.add('win');
        boxes[condition[2]].classList.add('win');
        }

    }
    if(iswon){
     gstatus.textContent=player+" Won...";
     running=false;
     


    }
    else if(!option.includes("")){
     gstatus.textContent=" Game Draw...";
     running=false;
    }
    else{
        changeplayer();

    }

}
function changeplayer(){
    player=(player=="X")?"O":"X";
    currentplayer=(currentplayer==x)? o:x;
    gstatus.textContent=player+" Your Turn";

}
function restartgame(){
option=["","","","","","","","",""];
currentplayer=x;
player="X";
running=true;
gstatus.textContent=player+ " Your Turn";
boxes.forEach(box=>{
  box.innerHTML="";
  box.classList.remove('win');
});

}