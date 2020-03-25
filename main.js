let popup1 = document.getElementById("popup1");
let popup2 = document.getElementById("popup2");
let popup3 = document.getElementById("popup3");

var log = document.createElement("p"); 
var text = document.createTextNode("On Wednesday, March 24th, 2020 I created my first JavaScript app"); 
popup3.appendChild(log);
log.appendChild(text); 
log.className = "log"; 
  
function aboutme() {
    closeAll(); 
    popup1.style.display = "block";
    
}

function projects() {
    closeAll(); 
    popup2.style.display = "block";
}

function dailylogs() {
    closeAll(); 
    popup3.style.display = "block";
}
function close1() {
    popup1.style.display = "none";
}

function close2() {
    popup2.style.display = "none";
}

 function close3() {
    popup3.style.display = "none";
}

function closeAll(){
    popup1.style.display = "none";
    popup2.style.display = "none";
    popup3.style.display = "none";
}