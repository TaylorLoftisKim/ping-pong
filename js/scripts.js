//Back-End Logic Begins
var userInput  = ("#user-input");
var pingPong = function(number){
var numberArray = [];
  for (var index = 1; index <= userInput; index++)
    if  (index % 15 == 0)  {
      numberArray.push("Ping-Pong");
      }
      else if (index % 5 == 0)  {
        numberArray.push("Pong");
      }
      else if (index % 3 == 0)  {
        numberArray.push("Ping");
      }
    else  {
      return userInput.join(" ");
    };
  };

//Front-End Logic Begins
$(document).ready(function()  {
  $("form#ping-pong").submit(function(event) {
  var userInput = parseInt($("#user-input").val());
    $(".output").text(pingPong(userInput));
    console.log(userInput);
    event.preventDefault();
  });
});
