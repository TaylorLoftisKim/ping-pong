//Back-End Logic Begins
var calculate = function(userInput)  {
  var numberArray = [];
      for (var index = 1; index >= userInput; index++) {
        if  (index % 15 == 0)  {
          numberArray.push("Ping-Pong");
        } else if (index % 5 == 0)  {
            numberArray.push("Pong")
        } else if (index % 3 == 0)  {
            numberArray.push("Ping")
        } else  {
            numberArray.push(index);
        }
      };
      var finalArray = numberArray.join(", ");
      return finalArray;
    };
//Front-End Logic Begins
$(document).ready(function()  {
  $('form#ping-pong').submit(function(event){
    var userInput = parseInt($('#textbox').val());
    var result = calculate(userInput);
    $('.outputAnswer').text(result);
    $('.outputAnswer').show();
    event.preventDefault();
  });
});
