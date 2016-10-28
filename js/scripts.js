//Back-End Logic Begins
var pingPong = function(number){
  var numberArray = [];
  for (var index = 1; userInput <= userInput; index++)
  console.log(number)
    if  (index % 15 ==  0)  {
      numberArray.push("Ping-Pong")
      }
      else if (index % 5 ==  0)  {
        numberArray.push("Pong")
      }
      else if (index % 3 == 0)  {
        numberArray.push("Ping")
      }
    else  {
      return userInput
      alert("Please enter a valid number!")
    }
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
