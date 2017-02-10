// window.onload = function(){console.log('user online')};

// buttons actions
var buttonT1 = document.getElementById('buttonT1');
var buttonT2 = document.getElementById('buttonT2');
var buttonT4 = document.getElementById('buttonT4');
var buttonTTest = document.getElementById('buttonTTest');
var buttonOpen = document.getElementById('buttonOpen');

buttonT1.onclick = function(){
  // send "{\"recognized\" : [\"T1\"], \"text\": \"\"}", "command"
  getXml();
  sendXml(xmlMaker("{\"recognized\" : [\"T1\"], \"text\": \"\"}"));
  // resUpdate('buttonT1 clicked');
};
buttonT2.onclick = function(){
  // send "{\"recognized\" : [\"T2\"], \"text\": \"\"}", "command"
  getXml();
  sendXml(xmlMaker("{\"recognized\" : [\"T2\"], \"text\": \"\"}", "command"));
  // resUpdate('buttonT2 clicked');
};
buttonT4.onclick = function(){
  // send "{\"recognized\" : [\"T2\"], \"text\": \"\"}", "command"
  getXml();
  sendXml(xmlMaker("{\"recognized\" : [\"T4\"], \"text\": \"\"}", "command"));
  // resUpdate('buttonT2 clicked');
};
buttonTTest.onclick = function(){
  // send "Mensagem de teste"
  // getXml();
  sendXmlTest(xmlTest("Mensagem de teste"));
  // resUpdate('buttonTTest clicked');
};
buttonOpen.onclick = function(){
  // stop all connections
  // sender.abort();
  getXml();

  // resUpdate('buttonTTest clicked');
};

// show response
var result = document.getElementById('result');
function resUpdate(m){
  result.innerHTML = (result.innerHTML + "<br>" + m);
}
