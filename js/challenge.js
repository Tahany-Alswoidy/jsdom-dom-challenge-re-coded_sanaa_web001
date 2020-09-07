let intervalID;
const counter=0;
function increaseCounter(){
  counter++;
  document.getElementById("counter").innerHTML=counter;
}
  function decreaseCounter(){
    --counter;
    document.getElementById("counter").innerHTML=counter;
  }
document.addEventListener('DOMContentLoaded',(e)=>{
  intervalID= setTimeout(increaseCounter, 1000);
  document.getElementById("plus").addEventListener('click',(event)=>{
  event.preventDefault();
  increaseCounter();
});
document.getElementById("minus").addEventListener('click',(event)=>{
  event.preventDefault();
  decreaseCounter();
});
});
