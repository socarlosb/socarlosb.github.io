// js connections file (this should be equal in both input and output folders?)
var statusConn = document.getElementById('statusConn');
var timer = 0;
var conn = false;
// output code
var getter = null;
var xml = null;
parser = new DOMParser();

var ImGetAddress = "http://192.168.0.45:8801/IM?GUI";
// get xml
getter = new XMLHttpRequest();

function getX(){

  getter.open('GET', ImGetAddress, true);
  statusConn.innerHTML = 'conn = true';
  conn = true;
  counters();
  getter.onreadystatechange = function(){
    if(getter.readyState == 1){
      // console.log('1: ' + getter);
      console.log('connection open');
    } else if(getter.readyState == 2){
      // console.log('2: ' + getter);
      console.log('data requested');
    } else if(getter.readyState == 3){
      // console.log('3: ' + getter);
      console.log('data is transfering');
    } else if(getter.readyState == 4) {
      // console.log('4: ' + getter);
      console.log('data has been received');
      // console.log('send response: '+ getter.responseText);
      // console.log('command: ' + getCommand(xml));
      // getCommand(xml);
      console.log(getter);
      if (getter.response == ""){
        console.log('no message received');
      } else {
        console.log('message received');
        xml = parser.parseFromString(getter.response, "text/xml");
        console.log('xml: '+ xml);
        passResult(getCommand(xml));

      }
      countersStop();
      statusConn.innerHTML = 'conn = false';
      conn = false;




    } else {
      console.log('what is this?');
    }
  }
  getter.send();
  // return showImg(getCommand(xml));

}

// search for command
function getCommand(xml){
  var result = $(xml).find("command").text();
  // console.log('result: ' + result);

  return result;
}


function abortConn(){
  console.log('abort conn');
  countersStop();
  getter.abort();

}


function checkTime(){

}
