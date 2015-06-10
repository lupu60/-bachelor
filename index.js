var tessel = require('tessel');
var gpio = tessel.port.GPIO;
// The trigger pin can be any GPIO 
var triggerPin = gpio.digital[26];
// The echo pin MUST be G3 on the GPIO bank 
var echoPin = gpio.digital[2];
 
var proximityLib = require('prox-hcsr04');
var proximity = proximityLib.use(triggerPin, echoPin);
 
function printDistance() {
  proximity.getDistance(function(err, distance) {
    if (err) throw err;
 
    console.log("Distance: ", distance, "cm away.");
 
    printDistance();
  });
}
 
printDistance();