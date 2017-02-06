//buttons actions
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

button1.onclick = function(){
  makeCorsRequest(xmlT1);
}
button2.onclick = function(){
  makeCorsRequest(xmlT2);
}
button3.onclick = function(){
  makeCorsRequest(xmlTTest);
}
