var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elDistanceMan = document.querySelector(".js-distance-man");
var elDistanceVelo = document.querySelector(".js-distance-velo");
var elDistanceCar = document.querySelector(".js-distance-car");
var elDistancePlane = document.querySelector(".js-distance-plane");

function speedMeter(userDistance){

  var onFoot = 3.6;
  var velo = 20.1;
  var car = 70;
  var byPlane = 800;
  
  var resultManHours = Math.floor((userDistance / onFoot) / 60);
  var resultManMins = Math.floor((userDistance / onFoot) % 60);
  
  var resultVeloHours = Math.floor((userDistance / velo) / 60);
  var resultVeloMins = Math.floor((userDistance / velo) % 60.);
  
  var resultCarHours = Math.floor((userDistance / car) / 60);
  var resultCarMins = Math.floor((userDistance / car) % 60);
  
  var resultPlaneHours = Math.floor((userDistance / byPlane) / 60);
  var resultPlaneMins = Math.floor((userDistance / byPlane) % 60);
  
  elDistanceMan.textContent = `${resultManHours} hours ${resultManMins} mins`
  elDistanceVelo.textContent = `${resultVeloHours} hours ${resultVeloMins} mins`
  elDistanceCar.textContent = `${resultCarHours} hours ${resultCarMins} mins`
  elDistancePlane.textContent = `${resultPlaneHours} hours ${resultPlaneMins} mins`
}

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  
  var inputValue = elInput.value * 1000;
  
  speedMeter(inputValue)
})