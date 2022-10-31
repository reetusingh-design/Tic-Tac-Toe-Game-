console.log("script running");
let gameGrid=["a","b","c","d","e","f","g","h","i"]
let winner = document.querySelector("#winner")
let gameScore=[0,0]
let clicks=0
let scoreDiv= document.querySelector("#scoreBoard")
function scoreBoard(){
  scoreDiv.innerHTML=`<p>Score: X=${gameScore[0]}  O=${gameScore[1]}`
  clicks=0
}
scoreBoard();
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

function checkWinner(){
if (gameGrid[0]==gameGrid[1]&&gameGrid[1]==gameGrid[2]){
  winner.innerHTML=`<h1>${gameGrid[1]} wins</h1>`
  if (gameGrid[1]=="x"){
    gameScore[0]+=1
  }else if (gameGrid[1]=="o"){
    gameScore[1]+=1
  }
  scoreBoard();
}else if (gameGrid[3]==gameGrid[4]&&gameGrid[4]==gameGrid[5]){
  winner.innerHTML=`<h1>${gameGrid[4]} wins</h1>`
  if (gameGrid[4]=="x"){
    gameScore[0]+=1
  }else if (gameGrid[4]=="o"){
    gameScore[1]+=1
  }
  scoreBoard();
}else if (gameGrid[6]==gameGrid[7]&&gameGrid[7]==gameGrid[8]){
  winner.innerHTML=`<h1>${gameGrid[7]} wins</h1>`
  if (gameGrid[7]=="x"){
    gameScore[0]+=1
  }else if (gameGrid[7]=="o"){
    gameScore[1]+=1
  }
  scoreBoard();
}else if (gameGrid[0]==gameGrid[3]&&gameGrid[3]==gameGrid[6]){
  winner.innerHTML=`<h1>${gameGrid[3]} wins</h1>`
  if (gameGrid[3]=="x"){
    gameScore[0]+=1
  }else if (gameGrid[3]=="o"){
    gameScore[1]+=1
  }
  scoreBoard();
}else if (gameGrid[1]==gameGrid[4]&&gameGrid[4]==gameGrid[7]){
  winner.innerHTML=`<h1>${gameGrid[4]} wins</h1>`
  if (gameGrid[4]=="x"){
    gameScore[0]+=1
  }else if (gameGrid[4]=="o"){
    gameScore[1]+=1
  }
  scoreBoard();
}else if (gameGrid[2]==gameGrid[5]&&gameGrid[5]==gameGrid[8]){
  winner.innerHTML=`<h1>${gameGrid[5]} wins</h1>`
  if (gameGrid[5]=="x"){
    gameScore[0]+=1
  }else if (gameGrid[5]=="o"){
    gameScore[1]+=1
  }
  scoreBoard();
}else if (gameGrid[0]==gameGrid[4]&&gameGrid[4]==gameGrid[8]){
  winner.innerHTML=`<h1>${gameGrid[4]} wins</h1>`
  if (gameGrid[4]=="x"){
    gameScore[0]+=1
  }else if (gameGrid[4]=="o"){
    gameScore[1]+=1
  }
  scoreBoard();
}else if (gameGrid[2]==gameGrid[4]&&gameGrid[4]==gameGrid[6]){
  winner.innerHTML=`<h1>${gameGrid[4]} wins</h1>`
  if (gameGrid[4]=="x"){
    gameScore[0]+=1
  }else if (gameGrid[4]=="o"){
    gameScore[1]+=1
  }
  scoreBoard();
}else if (clicks==9){
winner.innerHTML=`<h1>draw</h1>`
}
}


function playGame(){
  gameGrid=["a","b","c","d","e","f","g","h","i"]
// button X
const buttonx1 = document.querySelector("#bx1");
console.log(buttonx1);

const block0 = document.querySelector("#block_0")

buttonx1.addEventListener("click", (e) => {
  console.log("you clicked!");
  clicks+=1
  
block0.innerHTML=`<img class= "spidx" src="Spiderx.png">`
gameGrid[0]="x"
checkWinner();
})
const buttonx2 = document.querySelector("#bx2");
console.log(buttonx2);

const block1 = document.querySelector("#block_1")

buttonx2.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
block1.innerHTML=`<img class= "spidx" src="Spiderx.png">`
gameGrid[1]="x"
checkWinner();
})

const buttonx3 = document.querySelector("#bx3");
console.log(buttonx3);

const block2 = document.querySelector("#block_2")

buttonx3.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block2.innerHTML=`<img class= "spidx" src="Spiderx.png">`
gameGrid[2]="x"
checkWinner();
})

const buttonx4 = document.querySelector("#bx4");
console.log(buttonx4);

const block3 = document.querySelector("#block_3")

buttonx4.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block3.innerHTML=`<img class= "spidx" src="Spiderx.png">`
  gameGrid[3]="x"
  checkWinner();
})
const buttonx5 = document.querySelector("#bx5");
console.log(buttonx5);

const block4 = document.querySelector("#block_4")

buttonx5.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block4.innerHTML=`<img class= "spidx" src="Spiderx.png">`
  gameGrid[4]="x"
checkWinner();
})
const buttonx6 = document.querySelector("#bx6");
console.log(buttonx6);

const block5 = document.querySelector("#block_5")

buttonx6.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block5.innerHTML=`<img class= "spidx" src="Spiderx.png">`
  gameGrid[5]="x"
  checkWinner();
})
const buttonx7 = document.querySelector("#bx7");
console.log(buttonx7);

const block6 = document.querySelector("#block_6")

buttonx7.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block6.innerHTML=`<img class= "spidx" src="Spiderx.png">`
  gameGrid[6]="x"
  checkWinner();
})
const buttonx8 = document.querySelector("#bx8");
console.log(buttonx8);

const block7 = document.querySelector("#block_7")

buttonx8.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block7.innerHTML=`<img class= "spidx" src="Spiderx.png">`
  gameGrid[7]="x"
   checkWinner();
})
const buttonx9 = document.querySelector("#bx9");
console.log(buttonx9);

const block8 = document.querySelector("#block_8")

buttonx9.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block8.innerHTML=`<img class= "spidx" src="Spiderx.png">`
  gameGrid[8]="x"
   checkWinner();
})

//button O
const buttono1 = document.querySelector("#bo1");
console.log(buttono1);

buttono1.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block0.innerHTML=`<img class= "spidx" src="spidero.jpg">`
  gameGrid[0]="o"
  checkWinner();
})

const buttono2 = document.querySelector("#bo2");
console.log(buttono2);

buttono2.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block1.innerHTML=`<img class= "spidx" src="spidero.jpg">`
  gameGrid[1]="o"
  checkWinner();
})

const buttono3 = document.querySelector("#bo3");
console.log(buttono3);

buttono3.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block2.innerHTML=`<img class= "spidx" src="spidero.jpg">`
  gameGrid[2]="o"
  checkWinner();
})

const buttono4 = document.querySelector("#bo4");
console.log(buttono4);

buttono4.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block3.innerHTML=`<img class= "spidx" src="spidero.jpg">`
  gameGrid[3]="o"
  checkWinner();
})

const buttono5 = document.querySelector("#bo5");
console.log(buttono5);

buttono5.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block4.innerHTML=`<img class= "spidx" src="spidero.jpg">`
  gameGrid[4]="o"
  checkWinner();
})

const buttono6 = document.querySelector("#bo6");
console.log(buttono6);

buttono6.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block5.innerHTML=`<img class= "spidx" src="spidero.jpg">`
  gameGrid[5]="o"
  checkWinner();
})

const buttono7 = document.querySelector("#bo7");
console.log(buttono7);

buttono7.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block6.innerHTML=`<img class= "spidx" src="spidero.jpg">`
  gameGrid[6]="o"
   checkWinner();
})

const buttono8 = document.querySelector("#bo8");
console.log(buttono8);

buttono8.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1
  block7.innerHTML=`<img class= "spidx" src="spidero.jpg">`
  gameGrid[7]="o"
   checkWinner();
})

const buttono9 = document.querySelector("#bo9");
console.log(buttono9);

buttono9.addEventListener("click", (e) => {
  console.log("you clicked!");
   clicks+=1 
  block8.innerHTML=`<img class= "spidx" src="spidero.jpg">`
  gameGrid[8]="o"
   checkWinner();
})
}
playGame();
let resetButton = document.querySelector("#res")
let playArea = document.querySelector("#area")
resetButton.addEventListener("click", (e) => {
  console.log("button Pressed")
  winner.innerHTML=``
playArea.innerHTML=`
<div id="block_0" class="block"> 
           <button class= "x" id="bx1" type="button">x</button>
        <button class= "o" id="bo1" type="button">O</button></div> 

        <div id="block_1" class="block"><button class= "x" id="bx2" type="button">x</button>
        <button class= "o" id="bo2" type="button">O</button></div>

        <div id="block_2" class="block"><button class= "x" id="bx3" type="button">x</button>
        <button class= "o" id="bo3" type="button">O</button></div>

        <div id="block_3" class="block"><button class= "x" id="bx4" type="button">x</button>
        <button class= "o" id="bo4" type="button">O</button></div>

        <div id="block_4" class="block"><button class= "x" id="bx5" type="button">x</button>
        <button class= "o" id="bo5" type="button">O</button></div>

        <div id="block_5" class="block"><button class= "x" id="bx6" type="button">x</button>
        <button class= "o" id="bo6" type="button">O</button></div>
        
        <div id="block_6" class="block"><button class= "x" id="bx7" type="button">x</button>
        <button class= "o" id="bo7" type="button">O</button></div>

        <div id="block_7" class="block"><button class= "x" id="bx8" type="button">x</button>
        <button class= "o" id="bo8" type="button">O</button></div>

        <div id="block_8" class="block"><button class= "x" id="bx9" type="button">x</button>
        <button class= "o" id="bo9" type="button">O</button></div>
        
      </div> `
      playGame();
})

 
 