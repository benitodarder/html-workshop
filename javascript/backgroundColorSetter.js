function whenLoad() {
   Array.from(document.getElementsByClassName("inputText")).forEach(function(inputText) {
      inputText.addEventListener(
         'blur', 
         function checkInputValue() {
            colorComponent = parseInt(this.value, 16);
            if (isNaN(colorComponent) || colorComponent < 0 || colorComponent > 255) {
               alert(this.name + " component: " + colorComponent + ", not valid hexadecimal value: 00..FF");
               this.value = ''
            }
         });
   });

}


function setBackground() {
   document.body.style.backgroundColor = "rgb("+ 
                                             parseInt(document.getElementById("redValueId").value,16) + "," + 
                                             parseInt(document.getElementById("greenValueId").value,16) + "," + 
                                             parseInt(document.getElementById("blueValueId").value,16) +
                                          ")";
}
