var today = new Date ();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Dinner Time!';
} else if (hourNow > 12) {
    greeting = 'Lunch Time!';
} else if (hourNow > 0) {
    greeting = 'Breakfast Time!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

var name = prompt('What is your name?');
alert('Hey, ' + name + '. Welcome to my outstanding, wonderful, and beautiful website!' );

var button = document.createElement("button");
button.innerHTML = "Free Food";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  alert("OUT OF STOCK");
});