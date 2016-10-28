//Back-End Logic Begins
// var number = userInput.split(" ")
// var ping = ["3","6","9","12","15","18","21","24","27","30","33","36","39","42","45","48","51","54","57","60"]
// var pong = ["15","30","45","60"]
// var ping-pong = ["15","30","45","60"]
var index = 1;
var pingPong = function(number){
  var numberArray = [];
  for (userInput >= 0; index++)
    if  (index % 15 === 0;)  {
      numberArray.push("Ping-Pong")
      }
      else if (index % 5 === 0;)  {
        numberArray.push("Pong")
      }
      else if (index % 3 === 0;)  {
        numberArray.push("Ping")
      }
    else return.userInput {
      alert("Please enter a valid number!")
    }



//Front-End Logic Begins
$(document).ready(function()  {
  $("form#ping-pong").submit(function(event) {
    var userInput = parseInt($("#user-input").val());
    var output = converter(userInput);
    console.log(output);
    event.preventDefault();
  });
});
