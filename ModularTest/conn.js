var response = document.getElementById('response');
function logger (t){
  response.innerHTML = response.innerHTML + "\n" +  t;
};

// response.innerHTML =
// from https://www.html5rocks.com/en/tutorials/cors/

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest(msg) {
  // This is a sample server that supports CORS.
  // var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';
  // commented to use url from vars.js

  // var xhr = createCORSRequest('GET', url);
  var xhr = createCORSRequest('POST', url);
  if (!xhr) {
    logger('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    // var title = getTitle(text);
    logger('Response from CORS request to ' + url);// + ': ' + title);
  };

  xhr.onerror = function() {
    logger('Woops, there was an error making the request.');
  };

  xhr.send(msg);
}
