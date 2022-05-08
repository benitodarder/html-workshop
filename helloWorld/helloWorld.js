function greeting() {
   document.getElementById("pojoParagraf01").innerHTML =  document.getElementById("pojoString01").value;
}

function showHide() {
   currentVisibility = document.getElementById("validations").style.visibility;
   if (currentVisibility != 'visible') {
      document.getElementById("validations").style.visibility = 'visible';
   } else {
      document.getElementById("validations").style.visibility = 'hidden';
   }
}
