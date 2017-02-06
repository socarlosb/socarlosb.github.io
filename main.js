
var xmlSend = document.getElementById('xmlSend');
var strResult = document.getElementById('strResult');
var myConn = "http://192.168.0.45:9876/IM/";
var url = "http://192.168.0.45:9876/IM/";
// var myConn = "http://192.168.1.247:9876/IM/";

// create the xml
var msg=""+ "<mmi:mmi xmlns:mmi=\"http://www.w3.org/2008/04/mmi-arch\" mmi:Version=\"1.0\">\
  <mmi:startRequest mmi:source=\"TOUCH\" mmi:target=\"IM\" mmi:requestId=\"touch-id-1\" mmi:context=\"1\">\
    <mmi:data>\
      <emma:emma xmlns:emma=\"http://www.w3.org/2003/04/emma\" emma:Version=\"1.0\">\
        <emma:interpretation emma:id=\"touch\" emma:medium=\"display\" emma:mode=\"command\" emma:start=\"0\" emma:confidence=\"1\">\
          <command>{\"recognized\" : [\"T1\"], \"text\": \"\"}</command>\
        </emma:interpretation>\
      </emma:emma>\
    </mmi:data>\
  </mmi:startRequest>\
</mmi:mmi>";

 // paste code from https://www.html5rocks.com/en/tutorials/cors/
 // Create the XHR object.
 function createCORSRequest(method, url) {
   var xhr = new XMLHttpRequest();
   console.log(method);
   console.log(url);
   if ("withCredentials" in xhr) {
     // XHR for Chrome/Firefox/Opera/Safari.
     console.log("credencials for chrom, firefox, opera, safari ok");
     xhr.open(method, url, true);
   } else if (typeof XDomainRequest != "undefined") {
     console.log("request for ie");
     // XDomainRequest for IE.
     xhr = new XDomainRequest();
     xhr.open(method, url);
   } else {
     // CORS not supported.
     console.log("cors not supported");
     xhr = null;
   }
   console.log("xhr : "+xhr);
   return xhr;
 }

 // Helper method to parse the title tag from the response.
 function getTitle(text) {
   console.log('here');
   return text.match('<title>(.*)?</title>')[1];
 }

 // Make the actual CORS request.
 function makeCorsRequest() {
   // This is a sample server that supports CORS.
  //  var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';

  //  var xhr = createCORSRequest('GET', url);
     var xhr = createCORSRequest('POST', url);
   if (!xhr) {
    //  alert('CORS not supported');
     console.log('CORS not supported');
     return;
   }

   // Response handlers.
   xhr.onload = function() {
     console.log("test: " + xhr.responseText);
     var text = xhr.responseText;
    //  var title = getTitle(text);
    //  alert('Response from CORS request to ' + url + ': ' + title);
     console.log('Response from CORS request to ' + url);// + ': ' + title);
     alert('Response from CORS request to ' + url);
   };

   xhr.onerror = function() {
    //  alert('Woops, there was an error making the request.');
    console.log('Woops, there was an error making the request.');
   };

  //  xhr.send();
   xhr.send(msg);
 }

// createCORSRequest();




xmlSend.onclick = function(){
  // alert test to see if the button works on android chrome (it works)
  // alert("test");
  //function sendXml(){





// createCORSRequest("POST",myConn );
makeCorsRequest();

  // function reqListener () {
  //   console.log(this.responseText);
  //   strResult.innerHTML = "Response should appear here!";
  // }
    //remove for cors test
  // var oReq = new XMLHttpRequest();

  // oReq.onreadystatechange = function() {
  //   if (oReq.readyState == XMLHttpRequest.DONE) {
  //       //alert(oReq.responseText);
  //         strResult.innerHTML = oReq.responseText;
  //   }
  // }
  //oReq.addEventListener("load", reqListener);
  //console.log(oReq.open("GET", "http://localhost:9876/IM/"));
  //oReq.onload = console.log("ok");
  //oReq.open("POST", "http://localhost:9876/IM/");

  //remove for cors test
  // oReq.open("POST", myConn);
  // oReq.send(msg);

  //strResult.innerHTML = "E.T. phoned home!";


  // open connection
  // var xmlhttp = new XMLHttpRequest();
  // xmlhttp.open("POST","http://localhost:9876/IM/",true);
  // send xml data
  // xmlhttp.send(escape(msg));

}
