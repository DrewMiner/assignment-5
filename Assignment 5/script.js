// Write your JavaScript code here!
window.addEventListener('load', function(){
   console.log("It Loaded!");
   const form = document.querySelector('form');
   const pilotName = document.querySelector('input[name=pilotName]');
   const pilot = pilotName;
   const copilotName = document.querySelector('input[name=copilotName]');
   const copilot = copilotName;
   const fuelLevel = document.querySelector('input[name=fuelLevel]');
   const cargoMass = document.querySelector('input[name=cargoMass]');
//check letters function
   function lets(val, name) { 
      const letters = /^[A-Za-z]+$/;
      if(val.value.match(letters)) {
         console.log(`${name} good`);
         return true;
      } else {
         alert(`${name} can only be letters`);
         console.log(`${name} bad`);
         return false;
      }
   };
//check numbers function
   function nums(val, name) {
      var numbers = /^[0-9]+$/;
      if(val.match(numbers)) {
         console.log(`${name} good`);
         return true;
      } else {
               alert(`${name} can only be numbers`);
               console.log(`${name} bad`);
               return false;
            }
   };
// form validation 
   form.addEventListener('submit', function(event) {
      event.preventDefault();       
   //single validation of blank input
      if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
         alert("All fields are required!");
      } else {
         console.log("No blank elements");
      };
   // validation of pilot is letters only
      lets(pilot, "pilot");
   // validation of co-pilot is letters only
      lets(copilot, "copilot");
   // validation that fuel is numbers only
      nums(fuelLevel.value, "fuel");
   // validation that mass is numbers only
      nums(cargoMass.value, "mass");
// Updating Shuttle Requirements
   function shuttleUpdate() { 
      document.getElementById("faultyItems").style.visibility = "visible"; 
      document.getElementById("pilotStatus").innerHTML =  `${pilot.value} is ready!`;
      document.getElementById("copilotStatus").innerHTML = `${copilot.value} is ready!`;   
      if (fuelLevel.value < 10000) {        
         document.getElementById("launchStatus").innerText =  "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("fuelStatus").innerText = "Not enough fuel for the journey";         
      } else if (cargoMass.value > 9999) {         
         document.getElementById("launchStatus").innerText =  "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("cargoStatus").innerText = "Too much mass for the shuttle to take off";
      } else {         
         document.getElementById("launchStatus").innerText =  "Shuttle is ready for launch";
         document.getElementById("launchStatus").style.color = "green";
      }
   }
   shuttleUpdate();
   // Mission Target 
      const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json");
      fetchPromise.then(function(response) {
         const targetPlanets = response.json();
         targetPlanets.then(function(json) {
            console.log("name", json[0].name);
            function getRandPlanet(numb) {
               return Math.floor(Math.random() * Math.floor(numb));
            };
            const rand = getRandPlanet(6)
            missionTarget.innerHTML = `
            <div>
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[rand].name}</li>
               <li>Diameter: ${json[rand].diameter}</li>
               <li>Star: ${json[rand].star}</li>
               <li>Distance from Earth: ${json[rand].distance}</li>
               <li>Number of Moons: ${json[rand].moons}</li>
            </ol>
            <img src="${json[rand].image}">`
         });
      })  
   }); 
});




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
