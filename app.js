
if (typeof document !=='undefined'){



var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var code = document.querySelector('.code');

var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=87aa5115d39fa455b9601b9dd0a6ab16')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var codeValue = data['sys']['country'];
  
  

  main.innerHTML = nameValue;
  desc.innerHTML = "Description of cloud = "+descValue;
  temp.innerHTML = "Temperature = "+(tempValue/10) +"℃";
  code.innerHTML = "Country code ="+codeValue;
  
  input.value ="";

})


.catch(err => alert("Wrong city name!"));

})
}