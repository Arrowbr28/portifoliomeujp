function mudacor() {
  var body = document.body;
  var usa = body.style.backgroundColor;
  if (usa === "white" || usa === '') {
    body.style.backgroundColor = 'black';
    var a = document.getElementById("segundo2");
    a.style.backgroundColor = "white"
    var b = document.getElementById("segundo3");
    b.style.backgroundColor = "white";
    var c = document.querySelector("h3");
    c.style.color = "white";
    var d = document.querySelector("p");
    d.style.color = "white";
  } else {
    body.style.backgroundColor = "";
    var a = document.getElementById("segundo2");
    a.style.backgroundColor = ""
    var b = document.getElementById("segundo3");
    b.style.backgroundColor = "";
    var c = document.querySelector("h3");
    c.style.color = "";
    var d = document.querySelector("p");
    d.style.color = "";
}
}

function fonte1 () {
  document.querySelector("h1").style.fontSize = '80px';
  document.querySelector("h2").style.fontSize = '80px';
  document.querySelector("h3").style.fontSize = '80px';
  document.querySelector("h4").style.fontSize = '80px';
  document.querySelector("h5").style.fontSize = '80px';
  document.querySelector("p").style.fontSize = '80px';
}
function fonte2(){
document.querySelector("h1").style.fontSize = '';
document.querySelector("h2").style.fontSize = '';
document.querySelector("h3").style.fontSize = '';
document.querySelector("h4").style.fontSize = '';
document.querySelector("h5").style.fontSize = '';
document.querySelector("p").style.fontSize = '';
}

