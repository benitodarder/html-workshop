function whenMouseOver() {
   document.getElementById("isMouseOver").style.visibility =  "visible";
   document.getElementById("isMouseOut").style.visibility =  "hidden";
}

function whenMouseOut() {
   document.getElementById("isMouseOver").style.visibility =  "hidden";
   document.getElementById("isMouseOut").style.visibility =  "visible";
}

function whenLoad() {
   document.getElementById("isMouseOver").style.visibility =  "hidden";
   document.getElementById("isMouseOut").style.visibility =  "visible";
   document.getElementById("isMouseUp").style.visibility =  "hidden";
   document.getElementById("mouseX").innerHTML  =  "N/A";
   document.getElementById("mouseY").innerHTML  =  "N/A";    
}

function whenMouseDown() {
   document.getElementById("isMouseUp").style.visibility =  "visible";
}


function whenMouseUp() {
   document.getElementById("isMouseUp").style.visibility =  "hidden";
}

function whenMouseMove(event) {
   document.getElementById("mouseX").innerHTML  =  event.pageX;
   document.getElementById("mouseY").innerHTML  =  event.pageY;   
}
