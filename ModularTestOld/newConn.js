var response = document.getElementById('response');
function logger (t){
  response.innerHTML = response.innerHTML + "\n" +  t;
};



// a enviar
function sendXML(msg){
  var conn = new XMLHttpRequest();

  conn.onreadystatechange = function(){
    if(conn.readyState == 4 && conn.status == 200){
      console.log('conn: ' + conn);
    }
  }


  conn.open('POST', url, true);
  conn.send(msg);
};

// a receber

// window.load = function (){

function getResp(){
  var resp = new XMLHttpRequest();

  resp.onreadystatechange = function(){
    if(resp.readyState == 4 && resp.status == 200){
      // console.log('in resp');
      console.log('resp: ' + resp.response);
    }
  }

  resp.open('GET', url3, true);
  resp.send();
  // console.log(resp);
}
// }
