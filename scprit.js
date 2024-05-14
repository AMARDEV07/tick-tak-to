const boxes=document.querySelectorAll(".box");
const aboutgame=document.querySelector(".game-info");
const button=document.querySelector(".btn");
const winner=document.querySelector(".winner");
const looser=document.querySelector(".looser");
const win=document.querySelector(".win");





let currentPlayer;
let gamegride;

const winPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];





// function foe inti game


function initgame(){
    currentPlayer="x";
    gamegride=["","","","","","","","",""];
    //empty
    boxes.forEach((box,index) => {
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        //remove gree]n colour/
        box.classList=`box box${index+1}`;


        //
    });
    button.classList.remove("active");
    winner.classList.remove("active");
    looser.classList.remove("active");

     aboutgame.innerText=`current Player-${currentPlayer}`;
     //current xplayer put.


}
initgame();



function swapTurn(){
    if(currentPlayer==="x"){
        currentPlayer="o";
    }
    else{
        currentPlayer="x";
    }
  aboutgame.innerText=`current Player -${currentPlayer}`;
    
}



//new game button

function checkgameover(){
    let ans="";
winPosition.forEach((position)=>{
    //all three box shodw be non empty-and same in value;
    if((gamegride[position[0]]!==""|| gamegride[position[1]]!=="" ||gamegride[position[2]]!=="")
    &&(gamegride[position[0]]===gamegride[position[1]]) && (gamegride[position[1]]===gamegride[position[2]])){
//chek winner i s x;




        if(gamegride[position[0]]==="x")
            ans="x";
        else
        ans="o";
    //dis pinter event 
    boxes.forEach((box)=>{
        box.style.pointerEvents="none";
    })


    // x /y winner
    boxes[position[0]].classList.add("win");
    boxes[position[1]].classList.add("win");
    boxes[position[2]].classList.add("win");
    
    

}});

if(ans!==""){
    aboutgame.innerText=`winner player -${ans}`;
    button.classList.add("active");
    winner.classList.add("active")
    return;
  
}
//tie....

let fillcount=0;
gamegride.forEach((box)=>{
    if(box!=="")
        fillcount++;
});
   if(fillcount===9){
    aboutgame.innerText="game tied!";
    button.classList.add("active");
    looser.classList.add("active");
   }
}



//put eventlistner on box;
 function handelclick(index){
    if(gamegride[index]===""){
        boxes[index].innerHTML=currentPlayer;
        gamegride[index]=currentPlayer;
        boxes[index].style.pointerEvents="none";
        swapTurn();
      checkgameover();
        
    }
}
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handelclick(index);
        //pase value of box. 
    })
});


button.addEventListener("click",initgame);

