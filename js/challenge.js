let intervalID;
let counter=0;
let likes=0;
function increaseCounter(){
  counter++;
  document.getElementById("counter").innerHTML=counter;
}
  function decreaseCounter(){
    --counter;
    document.getElementById("counter").innerHTML=counter;
  }
document.addEventListener('DOMContentLoaded',(e)=>{
  intervalID= setInterval(increaseCounter, 1000);
  document.getElementById("plus").addEventListener('click',(event)=>{
  event.preventDefault();
  increaseCounter();
});
document.getElementById("minus").addEventListener('click',(event)=>{
  event.preventDefault();
  decreaseCounter();
});
document.getElementById("heart").addEventListener('click',(event)=>{
  event.preventDefault();
  likes++;
  document.getElementById("heart").innerHTML=likes+" ❤️";
});
});
document.getElementById("submit").addEventListener('click',(event)=>{
  event.preventDefault();
  let para=document.createElement("p");
  para.innerHTML=document.getElementById("comment-input").value;
 document.getElementById("submit").appendChild(para);
});
