let popup1 = document.getElementById("popup1");
let popup2 = document.getElementById("popup2");
let popup3 = document.getElementById("popup3");

function aboutme() {
    popup1.style.display = "block";
}


function projects() {
    popup2.style.display = "block"
    if(dailylogs() == true){
        popup3.style.display = "none";
    }
}

function dailylogs() {
    popup3.style.display = "block"
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

