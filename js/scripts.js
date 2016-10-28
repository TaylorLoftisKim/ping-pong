//Back-End Logic Begins
var ping = ["3","6","9","12","15","18","21","24","27","30","33","36","39","42","45","48","51","54","57","60"]
var pong = ["15","30","45","60"]
// var ping-pong = ["15","30","45","60"]











//Front-End Logic Begins
$(document).ready(function()  {
  $("#ping-pong").submit(function() {
    var userInput = parseInt($("#user-input").val());
    var output = translator(userInput);
    console.log(output);
    event.preventDefault();
  });
});
