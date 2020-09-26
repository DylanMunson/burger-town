var today = new Date ();
var hourNow = today.getHours();
var greeting;

if (hourNow > 17) {
    greeting = 'Dinner Time!';
} else if (hourNow > 11) {
    greeting = 'Lunch Time!';
} else if (hourNow > 5) {
    greeting = 'Breakfast Time!';
} else if (hourNow > 22) {
    greeting = 'Late Night Snack!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');