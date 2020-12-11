import cipher from './cipher.js';

console.log(cipher);

window.addEventListener("load", start, true);

function start(){

// document.getElementById("messageIn").addEventListener("keyup",function(){
//  this.value = this.value.toUpperCase();
//  }, true);
  // alert('Only English!')

  document.getElementById('messageIn').addEventListener("keyup", function(){
    let up = document.getElementById("messageIn");
    up.value = up.value.toUpperCase();
  }, true);

  document.getElementById('forYou').addEventListener("click",function(){
    let string = document.getElementById('messageIn').value;
    let offset = document.getElementById('offset').value;
    document.getElementById('messageOut').value = cipher.encode(offset,string);
  }, true);

  document.getElementById('toMe').addEventListener("click",function(){
    let string = document.getElementById('messageIn').value;
    let offset = document.getElementById('offset').value;
    document.getElementById('messageOut').value = cipher.decode(offset,string);
  }, true);
}

// var myWindow;

// function openWin{
//   myWindow = window.open("", "myWindow", "width=200,height=100");
//   myWindow.document.write("<p>Esta es mi ventana'</p>");
// }

// function closeWin{
//   myWindow.close();
// }