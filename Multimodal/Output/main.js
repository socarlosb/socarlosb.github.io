window.onload = function(){
  // console.log('startup');
  // setInterval(getImage, 3000);
  // getAll();
  // console.log(counters());
  // console.log(myfunc());
}

function getAll(){
  setInterval(getImage, 15000);
}
var src = 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg';


var myImage = document.getElementById('myImage');
// var openConn = document.getElementById('openConn');
openConn.addEventListener('click', getImage);
var closeConn = document.getElementById('closeConn');
closeConn.addEventListener('click', abortConn);

function getImage(){
  // console.log('getImage');
  // myImage.src = src;
  getX();
}

function passResult(command){
  console.log('show img of: ' + command);
 switch(command){
   case "{\"recognized\" : [\"HELLO\"]}{\"recognized\" : [\"T1\"], \"text\": \"\"}{\"recognized\" : [\"T1\"], \"text\": \"\"}":
    // console.log('command ok');
     return myImage.src = 't11.png';
    // case "{\"recognized\" : [\"BYE\"]}{\"recognized\" : [\"T2\"], \"text\": \"\"}{\"recognized\" : [\"T2\"], \"text\": \"\"}":
      // console.log('command ok');
      break;
    case "{\"recognized\" : [\"BYE\"]}{\"recognized\" : [\"T2\"], \"text\": \"\"}{\"recognized\" : [\"T2\"], \"text\": \"\"}":
      return myImage.src = 't22.png';
      break;
    case "{\"recognized\" : [\"ACTION\",\"ACTIVATE\",\"CARLOS\"]}{\"recognized\" : [\"T1\"], \"text\": \"\"}{\"recognized\" : [\"T4\"], \"text\": \"\"}":
      return myImage.src ='t14.png';
      break;
    case "{\"recognized\" : [\"FOUR\"]}{\"recognized\" : [\"T1\"], \"text\": \"\"}{\"recognized\" : [\"T2\"], \"text\": \"\"}":
      return myImage.src ='t12.png';
      break;
    case "{\"recognized\" : [\"?!!!!\"]}{\"recognized\" : [\"T2\"], \"text\": \"\"}":
      return myImage.src ='t2w8.png';
      break;
   default:
    myImage.src = 'placehold.png';
  }
}
