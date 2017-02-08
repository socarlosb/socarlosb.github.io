//buttons actions
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

button1.onclick = function(){
  sendXML(xmlT1);
  getResp();
}
button2.onclick = function(){
  sendXML(xmlT2);
  getResp();
}
button3.onclick = function(){
  sendXML(xmlTTest);
  getResp();
}
