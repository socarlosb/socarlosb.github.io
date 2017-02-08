window.onload = function(){console.log('user online')};

// buttons actions
var buttonT1 = document.getElementById('buttonT1');
var buttonT2 = document.getElementById('buttonT2');
var buttonTTest = document.getElementById('buttonTTest');

buttonT1.onclick = function(){
  // send "{\"recognized\" : [\"T1\"], \"text\": \"\"}", "command"
  sendXml(xmlMaker("{\"recognized\" : [\"T1\"], \"text\": \"\"}"));
  getXml();
  // resUpdate('buttonT1 clicked');
};
buttonT2.onclick = function(){
  // send "{\"recognized\" : [\"T2\"], \"text\": \"\"}", "command"
  sendXml(xmlMaker("{\"recognized\" : [\"T2\"], \"text\": \"\"}", "command"));
  getXml();
  // resUpdate('buttonT2 clicked');
};
buttonTTest.onclick = function(){
  // send "Mensagem de teste"
  sendXmlTest(xmlTest("Mensagem de teste"));
  getXml();
  // resUpdate('buttonTTest clicked');
};

// show response
var result = document.getElementById('result');
function resUpdate(m){
  result.innerHTML = (result.innerHTML + "<br>" + m);
}
