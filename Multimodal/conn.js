// connections file

// connection vars
// var ImAddress = "http://localhost:8000/IM/";
// var ImAddress2 = "http://localhost:9876/IM/";
// var ImGetAddress = "http://localhost:8801/IM?GUI";
var ImAddress = "http://192.168.0.45:8000/IM/";
var ImAddress2 = "http://192.168.0.45:9876/IM/";
var ImGetAddress = "http://192.168.0.45:8801/IM?GUI";

// connection to send xml
function sendXml (xml){

  var sender = new XMLHttpRequest();
  sender.open('POST', ImAddress2, true);

  sender.onload = function(){
    if(sender.status == 200){
      // resUpdate('send: '+ sender.response);
      console.log('send response: '+ sender.responseText);

    }
  }

  sender.send(xml);
  // resUpdate('send: '+ sender.response);
}

// connection to send xml test
function sendXmlTest (xml){

  var sender = new XMLHttpRequest();
  sender.open('POST', ImAddress, true);

  sender.onload = function(){
    if(sender.status == 200){
      // resUpdate('send: '+ sender.response);
      console.log('send response: '+ sender.responseText);
    }
  }

  sender.send(xml);
  // console.log(sender);
  // resUpdate('send: '+ sender.response);
}

// connection to receive xml (response)
function getXml (){


  var getter = new XMLHttpRequest();

  getter.addEventListener("load", transferComplete);
  getter.addEventListener("progress", updateProgress);
  getter.addEventListener("abort", transferCanceled);

  getter.open('GET', ImGetAddress, true);

  getter.onreadystatechange = function(){
    if(getter.readyState == 4 && getter.status == 200){

      // resUpdate('get: '+ getter);
      // console.log('get: '+ getter.response);
      //
      parser = new DOMParser();
      var xml = parser.parseFromString(getter.response, "text/xml");

      // console.log('comando: ' + getCommand(xml));
      resUpdate(getCommand(xml));



    }
  }
  // progress on transfers from the server to the client (downloads)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total;
    // ...
    console.log('in progress' + percentComplete);
  } else {
    // Unable to compute progress information since the total size is unknown
    console.log('failed');
  }
}
function transferComplete(evt) {
  console.log("The transfer is complete.");
  getter.abort();
}
function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}

  getter.send();
  // resUpdate('get: '+ getter.response);


  // parser = new DOMParser();
  // var xml = parser.parseFromString(getter.response, "text/xml");
  // resUpdate(getCommand(xml));


}


// get the result command from xml received

function getCommand(xml){
  var result = $(xml).find("command").text();
  // console.log(result);
  return result;
}

function testConnection(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() { alert("Connected!"); }
    xmlhttp.onerror = function() { alert("Not Connected"); }
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}
