let intervalID;
let counter=0;
function increaseCounter(c){
  c++;
  document.getElementById("counter").innerHTML=c;
}
  function decreaseCounter(){
  return counter--;}
document.addEventListener('DOMContentLoaded',(e)=>{
  
  // counter=0;
  // intervalID= setTimeout(increaseCounter, 1000);
  // // document.getElementById("counter").innerHTML=counter;
});
document.getElementById("plus").addEventListener('click',(event)=>{
  event.preventDefault();
  increaseCounter(counter);
});
document.getElementById("minus").addEventListener('click',(event)=>{
  event.preventDefault();
  increaseCounter(counter);
});