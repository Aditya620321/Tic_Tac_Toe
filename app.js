let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#id-button");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0=true;
turn0.querySelector

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0===true){
            box.innerText="O";
            box.style.color = "#060469";
            turn0=false;

        }
        else{
            box.innerText="X";
            box.style.color = "rgb(233, 9, 46)";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val  != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner" , pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);