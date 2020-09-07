let intervalID;
let counter=0;
function increaseCounter(){
  counter++;
  document.getElementById("counter").innerHTML=counter;
}
  function increaseCounter(){
  return counter--;}
document.addEventListener('DOMContentLoaded',(e)=>{
  
  // counter=0;
   intervalID= setTimeout(increaseCounter, 1000);
  // document.getElementById("counter").innerHTML=counter;
});
document.getElementById("plus").addEventListener('click',(event)=>{
  event.preventDefault();
  increaseCounter();
});