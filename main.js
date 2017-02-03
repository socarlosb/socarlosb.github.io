
var myLink = document.getElementById('xmlSend');
var strResult = document.getElementById('strResult');

xmlSend.onclick = function(){
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
  </mmi:mmi>"


  // function reqListener () {
  //   console.log(this.responseText);
  //   strResult.innerHTML = "Response should appear here!";
  // }
  var oReq = new XMLHttpRequest();
  // oReq.onreadystatechange = function() {
  //   if (oReq.readyState == XMLHttpRequest.DONE) {
  //       //alert(oReq.responseText);
  //         strResult.innerHTML = oReq.responseText;
  //   }
  // }
  //oReq.addEventListener("load", reqListener);
  //console.log(oReq.open("GET", "http://localhost:9876/IM/"));
  //oReq.onload = console.log("ok");
  oReq.open("POST", "http://localhost:9876/IM/");
  oReq.open("POST", "http://192.168.0.45:9876/IM/");
  oReq.send(msg);
  //strResult.innerHTML = "E.T. phoned home!";


  // open connection
  // var xmlhttp = new XMLHttpRequest();
  // xmlhttp.open("POST","http://localhost:9876/IM/",true);
  // send xml data
  // xmlhttp.send(escape(msg));
}
