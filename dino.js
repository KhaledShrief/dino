const dino = document.querySelector("#dino")
const block = document.querySelector("#block")
const game =  document.querySelector("#game")
let score = document.querySelector("p");
const button = document.querySelector("button")
const h1 = document.querySelector("h1")
const body = document.querySelector("body")
const death = document.querySelector("#block2");
const death2 = document.querySelector("#tree2");
var h4 = document.createElement("h4");
        h4.innerText="game over";
        h4.style.color ="white"


function jump(){
    if(dino.classList !== "animation"){ 
    dino.classList.add("animation")
    }
    setTimeout(function(){
        dino.classList.remove("animation")
    },1000);
}
document.body.addEventListener("keydown",(e)=>{
  if(e.code === "Space" || e.code === "ArrowUp"){
    (e).preventDefault
    jump()
    increment()
  };
});
let checkDead = setInterval(function(){
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<50 && blockLeft >0 && dinoTop>=170){
        score.innerHTML = 0;
        block.classList.remove("animation2")
        body.appendChild(h4);
        death.classList.add("block2")
        death2.classList.add("tree2");
        audio.pause()           
    }
},10)   
// SCORE

let num = 0;
function increment(){
 num = num +10
 score.innerHTML =0+num;
}

function start(){

    block.classList.add("animation2");
      h4.remove();
      num= 0;
      death.classList.remove("block2")
      death.classList.remove("tree2")
    
  }
  let audio = new Audio("SuperMarioBros.mp3");
//   let crush = new Audio("key04.mp3");
  function playMusic(){
    audio.load()
    audio.play()
  }
  button.addEventListener("click",playMusic)

//   function playDeath(){
//     crush.play()
//   }
//   playDeath() 

function increment1(item){
   item= item+1
 return item

}
let num2 = 0 
function increment2(){

num2 =num2+1
return increment1(num2)
}
const sample = (array)=> array[Math.floor(Math.random()*array.length)];
const myArr = ["12345678910"]
const name = "klaus"
