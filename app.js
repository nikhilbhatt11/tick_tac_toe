let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];



boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("button clicked");
        if(turnO){
            box.innerText = 'O';
            turnO = false;
            box.classList.add('ocolor');
        }else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    resetbtn.classList.remove("hide");

}

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner =(winner)=>{
    msg.innerText = `congratulation , Winner is ${winner}`;
    msgContainer.classList.remove('hide'); 
    resetbtn.classList.add('hide');
    disableBoxes();
}

const checkWinner =() =>{
    for(let pattern of patterns){
         
        let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
          let pos3Val = boxes[pattern[2]].innerText;
          if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                
                showWinner(pos1Val);
            }
          }
    }


}

newgamebtn.addEventListener('click',resetGame);
resetbtn.addEventListener("click", resetGame);