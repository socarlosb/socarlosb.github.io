// vars
var url = "http://192.168.0.45:9876/IM/";

// vars xml
var xmlT1 = "" + "<mmi:mmi xmlns:mmi=\"http://www.w3.org/2008/04/mmi-arch\" mmi:Version=\"1.0\">\
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

var xmlT2 = "" + "<mmi:mmi xmlns:mmi=\"http://www.w3.org/2008/04/mmi-arch\" mmi:Version=\"1.0\">\
  <mmi:startRequest mmi:source=\"TOUCH\" mmi:target=\"IM\" mmi:requestId=\"touch-id-1\" mmi:context=\"1\">\
    <mmi:data>\
      <emma:emma xmlns:emma=\"http://www.w3.org/2003/04/emma\" emma:Version=\"1.0\">\
        <emma:interpretation emma:id=\"touch\" emma:medium=\"display\" emma:mode=\"command\" emma:start=\"0\" emma:confidence=\"1\">\
          <command>{\"recognized\" : [\"T2\"], \"text\": \"\"}</command>\
        </emma:interpretation>\
      </emma:emma>\
    </mmi:data>\
  </mmi:startRequest>\
</mmi:mmi>";

var xmlTTest = "" + "<mmi:mmi xmlns:mmi=\"http://www.w3.org/2008/04/mmi-arch\" mmi:Version=\"1.0\">\
  <mmi:startRequest mmi:source=\"APP\" mmi:target=\"IM\" mmi:requestId=\"app-id-1\" mmi:context=\"1\">\
    <mmi:data>\
      <speak version=\"1.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.w3.org/2001/10/synthesis http://www.w3.org/TR/speech-synthesis/synthesis.xsd\" xml:lang=\"en-US\">\
        <s>Mensagem de teste</s>\
      </speak>\
    </mmi:data>\
  </mmi:startRequest>\
</mmi:mmi>";
