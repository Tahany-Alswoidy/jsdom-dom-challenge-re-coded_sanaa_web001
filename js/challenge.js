let intervalID;
const counter=0;
function increaseCounter(){
  return ++counter;
}
  function decreaseCounter(){
  return --counter;}
document.addEventListener('DOMContentLoaded',(e)=>{
  
  // counter=0;
  // intervalID= setTimeout(increaseCounter, 1000);
  // // document.getElementById("counter").innerHTML=counter;
});
document.getElementById("plus").addEventListener('click',(event)=>{
  event.preventDefault();
  counter=increaseCounter();
  document.getElementById("counter").innerHTML=counter;
});
document.getElementById("minus").addEventListener('click',(event)=>{
  event.preventDefault();
  counter=decreaseCounter();
  document.getElementById("counter").innerHTML=counter;
});