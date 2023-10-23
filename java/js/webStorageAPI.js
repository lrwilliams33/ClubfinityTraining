
// does same thing
window.alert("ok");
alert("ok");

alert(location); // alert window with url of website

// begin api learning

const myArray = ["eat", "sleep", "code"];

const myObj = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  logName: function() { // this makes a method in the object
    console.log(this.name);
  }
}

// stores the object in the webpage that can be retrieved later
sessionStorage.setItem("mySessionStore", JSON.stringify(myObj)); // need to convert to JSON to see data correctly
const mySessiondata = JSON.parse(sessionStorage.
  getItem("mySessionStore")); // parse the JSON data to convert it back into object (function witll be lost)
console.log(mySessiondata);

// stores the object in the browser so the data will stay even when website is closed and relaunched
localStorageStorage.setItem("mylocalStore", JSON.stringify(myObj)); // need to convert to JSON to see data correctly
const myLocaldata = JSON.parse(localStorage.
  getItem("myLocalStore")); // parse the JSON data to convert it back into object (function witll be lost)
console.log(myLocaldata);

// other functions
localStorage.removeItem("myLocalStore"); // remove the data
localStorage.clear(); // clears all data
const key = localStorage.key(0); // gets data in the first position
const len = localStorage.length; // gets the number of items in local storage for the browser




