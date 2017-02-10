// window.onload = function(){
//   console.log('im in');
// }
var animals = document.getElementById('animals');
var lego = document.getElementById('lego');
var building = document.getElementById('building');
// var animals = document.querySelector('#animals');
// var lego = document.querySelector('#lego');

animals.addEventListener('click', sendImage1);
lego.addEventListener('click', sendImage2);
building.addEventListener('click', sendImage3);

function sendImage1(){
  sendX(makeXml("{\"recognized\" : [\"T1\"], \"text\": \"\"}"));
}
function sendImage2(){
   sendX(makeXml("{\"recognized\" : [\"T2\"], \"text\": \"\"}"));
}
function sendImage3(){
    sendX(makeXml("{\"recognized\" : [\"T4\"], \"text\": \"\"}", "command"));
}
