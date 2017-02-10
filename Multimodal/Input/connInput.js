// js connections file (this should be equal in both input and output folders?)


// input code
var ImAddress = "http://192.168.0.45:8000/IM/";
var ImAddress2 = "http://192.168.0.45:9876/IM/";
// send xml
function sendX(command){
  var sender = new XMLHttpRequest();
  sender.open('POST', ImAddress2, true);
  sender.onload = function(){
    if(sender.status == 200){
      console.log('send response: '+ sender.responseText);
      // run function here?
      // var xml = makeXml(command);
    }
  }
  sender.send(makeXml(command));
}

// make im xml
function makeXml(command){
  var emma = "" + "<mmi:mmi xmlns:mmi=\"http://www.w3.org/2008/04/mmi-arch\" mmi:Version=\"1.0\">\
    <mmi:startRequest mmi:source=\"TOUCH\" mmi:target=\"IM\" mmi:requestId=\"touch-id-1\" mmi:context=\"1\">\
      <mmi:data>\
        <emma:emma xmlns:emma=\"http://www.w3.org/2003/04/emma\" emma:Version=\"1.0\">\
          <emma:interpretation emma:id=\"touch\" emma:medium=\"display\" emma:mode=\"command\" emma:start=\"0\" emma:confidence=\"1\">\
            <command>"+ command +"</command>\
          </emma:interpretation>\
        </emma:emma>\
      </mmi:data>\
    </mmi:startRequest>\
  </mmi:mmi>";

  return emma;
}
// make emma xml

// join all xml
