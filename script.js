// Write your JavaScript code here!
        window.addEventListener("load", function() {
          let form = document.querySelector("form");
          form.addEventListener("submit", function(event) {
            let pilotNameInput = document.querySelector("input[name=pilotName]");
             let coPilot = document.querySelector("input[name=coPilot]");
             let fuel = document.querySelector("input[gas=fuel]");
             let cargo = document.querySelector("input[weight=cargo]");
             if (pilotNameInput.value === "" || coPilot.value === "" || fuel.value ==="" || cargo.value ==="") {
                alert("All fields are required!");
             }
          });
       });
  
}
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
