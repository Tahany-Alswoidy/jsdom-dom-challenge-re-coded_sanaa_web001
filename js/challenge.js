let intervalID;
let counter=0;
function increaseCounter(c){
  c++;
}
  function decreaseCounter(c){
  return c--;}
document.addEventListener('DOMContentLoaded',(e)=>{
  
  // counter=0;
  // intervalID= setTimeout(increaseCounter, 1000);
  // // document.getElementById("counter").innerHTML=counter;
});
document.getElementById("plus").addEventListener('click',(event)=>{
  event.preventDefault();
  counter=increaseCounter(counter);
  document.getElementById("counter").innerHTML=counter;
});
document.getElementById("minus").addEventListener('click',(event)=>{
  event.preventDefault();
  counter=decreaseCounter();
  document.getElementById("counter").innerHTML=counter;
});