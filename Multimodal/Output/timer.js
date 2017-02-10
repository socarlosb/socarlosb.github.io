// this file is just a 15sec timer, it will output numbers from 1 to 15,
// or, it will just output when the 15sec end.
var statusConn = document.getElementById('statusConn');
// you just need to call the function and it will return de numbers
// from 1 to 15.
var count;
var x;
function counters(){
  count = 0;
  x = setInterval(function(){
    if (count == 15){
      clearInterval(this);
    } else {
      count ++;
            // console.log('who??');
            // console.log(count);
            statusConn.innerHTML = count;
      // return count++;
      // console.log('what?');
    }
  }, 1000);
}

function myfunc(){
  return 2;
}

function countersStop(){
  clearInterval(x);
}
