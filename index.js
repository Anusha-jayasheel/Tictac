/**
* This program is a boilerplate code for the standard tic tac toe game
* Here the “box” represents one placeholder for either a “X” or a “0”
* We have a 2D array to represent the arrangement of X or O is a grid
* 0 -> empty box
* 1 -> box with X
* 2 -> box with O
*
* Below are the tasks which needs to be completed:
* Imagine you are playing with the computer so every alternate move should be done by the computer
* X -> player
* O -> Computer
*
* Winner needs to be decided and has to be flashed
*
* Extra points will be given for approaching the problem more creatively
* 
*/

  function startGame(){
     for(var i=1;i<=9;i=i+1){
      clearBox(i);
}     
     document.turn="X";
     if(Math.random>0.5){
     document.turn="O";
 }
     document.winner=null;
     setMessage(document.turn + " gets to start");
  }
  
 function setMessage(msg){
  document.getElementById("message").innerText=msg;
}
 function nextMove(square){
   	if(document.winner!=null){
      setMessage(document.winner + " already Won the Game!");
 }else if(square.innerText==""){
  square.innerText=document.turn;
  switchTurn();
}else{
 setMessage("That square is already used!");
}
}

function switchTurn(){
     if(checkForWinner(document.turn)){
     setMessage("Congratulations," + document.turn + "Yon Won!!");
     document.winner=document.turn;
}else if(document.turn=="X"){
       document.turn="O";
        setMessage("It's"+ document.turn + "'s turn!!");
}else{
    document.turn="X";
   setMessage("It's"+ document.turn + "'s turn!!");
}
}
function checkForWinner(move){
 var result=false;
 if(checkRow(1,2,3,move) ||
   checkRow(4,5,6,move) ||
   checkRow(7,8,9,move) ||  
   checkRow(1,4,7,move) ||
   checkRow(2,5,8,move) ||
   checkRow(3,6,9,move) ||
   checkRow(1,5,9,move) ||
   checkRow(3,5,7,move)){
    result=true;
}
return result;
}
function checkRow(a,b,c,move){
  var result=false;
  if(getBox(a)==move && getBox(b)==move && getBox(c)==move){
  result=true;
}
  return result;
}
function getBox(number){
   return document.getElementById("s" + number).innerText;
}
function clearBox(number){
 document.getElementById("s" + number).innerText= "";

}
