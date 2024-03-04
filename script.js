let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newb=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;

const arr=[
   [0,1,2],
   [3,4,5],
   [6,7,8],

   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
  [2,4,6]

];
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
  if(turno){
   box.innerText='O';
   box.style.backgroundColor="green";
   box.style.color="white";
   turno=false;
}
else{
   box.innerText='X';
   box.style.backgroundColor="yellow";
   box.style.color="magenta";
   turno=true;
}
box.disabled=true;
checkwinner();
});
});
const showwinner=(winner)=>{
   msg.innerText=msg.innerText = `Congratulations, Winner is ${winner}`;

   msgcontainer.classList.remove("hide");
   disableboxes();

};
const checkwinner=()=>{
   for(pattern of arr){
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
if(pos1!=""&&pos2!=""&&pos3!=""){
   if(pos1===pos2&&pos2===pos3){
      showwinner(pos1);
      return;
   }}
}};
const reset=()=>{
   turno= true;
   enableBoxes();
   msgcontainer.classList.add("hide");
       for (let box of boxes) {
      box.style.backgroundColor = ""; // Reset background color
      box.style.color = ""; // Reset text color
   }

};
newb.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);
const enableBoxes=()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
};
const disableboxes=()=>{
   for(let box of boxes){
      box.disabled=true;
   }
};
