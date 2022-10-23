var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  // var audio = new Audio('sounds/tom-3.mp3');
// audio.play();
// this.style.backgroundColor="black";
// console.log(this);
// this.style.backgroundColor="green";
var html=this.innerHTML;
makeSound(html);
animation(html);
});
}
document.addEventListener("keypress",function(e){
makeSound(e.key);
animation(e.key)
});

function makeSound(key){
  switch(key){
    case "w":
     var audio = new Audio('sounds/tom-1.mp3');
     audio.play();
     break;
    case "a":
     var audio = new Audio('sounds/tom-2.mp3');
     audio.play();
     break;
    case "s":
     var audio = new Audio('sounds/tom-3.mp3');
     audio.play();
     break;
    case "d":
     var audio = new Audio('sounds/tom-4.mp3');
     audio.play();
     break;
    case "j":
     var audio = new Audio('sounds/snare.mp3');
     audio.play();
     break;
    case "k":
     var audio = new Audio('sounds/kick.mp3');
     audio.play();
     break;
    case "l":
     var audio = new Audio('sounds/crash.mp3');
     audio.play();
     break;
  }
}
function animation(key){
  var d=document.querySelector("."+key);
  d.classList.add("pressed");
  setTimeout(function(){
    d.classList.remove("pressed");
  },120);
}
// function Bell(a,b,c,d){
//   this.a=a;
//   this.b=b;
//   this.c=c;
//   this.d=d;
//   this.f=function(){
//     alert("YES, Siddhartha is the GOAT");
//   }
// }
