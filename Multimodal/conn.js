// connections file

// connection vars
// var ImAddress2 = "http://localhost:9876/IM/";
// var ImGetAddress = "http://localhost:8801/IM?GUI";
var ImAddress2 = "http://192.168.0.45:9876/IM/";
var ImGetAddress = "http://192.168.0.45:8801/IM?GUI";

// connection to send xml
function sendXml (xml){

  var sender = new XMLHttpRequest();

  sender.onreadystatechange = function(){
    if(sender.readyState == 4 && sender.status == 200){
      resUpdate('send: '+ sender.response);
      // console.log('send: '+ sender.response);
    }
  }

  sender.open('POST', ImAddress2, true);
  sender.send(xml);
  // resUpdate('send: '+ sender.response);
}

// connection to receive xml (response)
function getXml (){

  var getter = new XMLHttpRequest();

  getter.onreadystatechange = function(){
    if(getter.readyState == 4 && getter.status == 200){
      // resUpdate('get: '+ getter);
      // console.log('get: '+ getter.response);

      parser = new DOMParser();
      var xml = parser.parseFromString(getter.response, "text/xml");

      // console.log('comando: ' + getCommand(xml));
      resUpdate('comando: ' + getCommand(xml));
      getter.abort();
    }
  }

  getter.open('GET', ImGetAddress, true);
  getter.send();
  // resUpdate('get: '+ getter.response);
}


// get the result command from xml received

function getCommand(xml){
  var result = $(xml).find("command").text();
  return result;
}
