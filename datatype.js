var x = 16 +  "desktop";
document.getElementById("data").innerHTML = x;

var x = "desktop" + 16;
document.getElementById("data1").innerHTML = x;

var x = 26 + 4 + "desktop";
document.getElementById("data2").innerHTML = x;

var x = "desktop" + 26 + 4;
document.getElementById("data3").innerHTML = x;




var LastName1 = "Abiodun is a string";
var LastName2 = "Abiodun is a string";

document.getElementById("data-string").innerHTML =
LastName1 + "<br>" + 
LastName2; 


var answer1 = "It's well";
var answer2 = "He is called 'Abiodun'";
var answer3 = 'He is called "Abiodun"';

document.getElementById("string-quote").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;


var x1 = 38.00;
var x2 = 38;
var x3 = 3.18;

document.getElementById("num").innerHTML =
x1 + "<br>" + x2 + "<br>" + x3;


var x = 5;
var y = 5;
var z = 6;
document.getElementById("boolean").innerHTML =
(x == y) + "<br>" + (x == z);


var cars = ["Toyota","camry","ipsum"];

document.getElementById("array-method").innerHTML = cars[0];


var person = {
    firstName : "oniyide",
    lastName  : "Abiodun",
    age     : 20,
    eyeColor  : "black"
  };
  
  document.getElementById("obj").innerHTML =
  person.firstName + " is " + person.age + " years old.";
