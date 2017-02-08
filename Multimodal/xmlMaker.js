// function to make the xml with action
function xmlMaker(a){

  var xmlStr = "" + "<mmi:mmi xmlns:mmi=\"http://www.w3.org/2008/04/mmi-arch\" mmi:Version=\"1.0\">\
    <mmi:startRequest mmi:source=\"TOUCH\" mmi:target=\"IM\" mmi:requestId=\"touch-id-1\" mmi:context=\"1\">\
      <mmi:data>\
        <emma:emma xmlns:emma=\"http://www.w3.org/2003/04/emma\" emma:Version=\"1.0\">\
          <emma:interpretation emma:id=\"touch\" emma:medium=\"display\" emma:mode=\"command\" emma:start=\"0\" emma:confidence=\"1\">\
            <command>"+ a +"</command>\
          </emma:interpretation>\
        </emma:emma>\
      </mmi:data>\
    </mmi:startRequest>\
  </mmi:mmi>";

  parser = new DOMParser();
  var xml = parser.parseFromString(xmlStr, "text/xml");
  // console.log(xml);
  // console.log(realXml);
  // return as string (xmlStr) or xml object (xml)
  return xmlStr; // it only accepts strings!


}
