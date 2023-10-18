const anyName = "Landon";
let len = anyName.length;

console.log(anyName.charAt(Math.floor(Math.random() * len)));

// switch
switch("2") {

  case 1:
    console.log("1");
    break;

  case 2:
    console.log(2);
    break;

  default:
    console.log("No match");
}

// ternary operator
// condition ? if true : if false

let soup = "Chicken";
let response = soup ? "Yes we have soup" : "Sorry No soup today";
console.log(response);

// User input
alert("hi"); // popup window with only ok
let confirmed = confirm("Ok === True"); // popup window with ok or cancel
let name = prompt("Please enter your name."); // popup with textbox
// double question marks ?? checks for null value (useful when no name is entered in the prompt)