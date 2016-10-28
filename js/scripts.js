//Back-End Logic Begins
var pingPong = function(userInput){
  var numberArray = [];
    for (var index = 1; index >= userInput; index++)
      if  (index % 15 == 0)  {
        numberArray.push("Ping-Pong")
      }
        else if (index % 5 == 0)  {
          numberArray.push("Pong");
      }
        else if (index % 3 == 0)  {
          numberArray.push("Ping");
      }
        else  {
          userInput.push(userInput);
      }
    return result;
  };

//Front-End Logic Begins
$(document).ready(function()  {
  $("form#ping-pong").submit(function(event) {
  var userInput = parseInt($("#user-input").val());
  var result = pingPong(userInput)
    $(".output").text(result);
    console.log(userInput);
    event.preventDefault();
  });
});
