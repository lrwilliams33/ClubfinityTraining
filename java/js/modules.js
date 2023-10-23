// modules are used to export different sections of code from one file to another
// need a server running (open with live server)
// also needs type="module" in the script tag

// some functions exporting then can import them to other file
export default function playGuitar() { // dont need to have a default can be like other functions
  return "playing";
};
export const shredding = () => {
  return "shredding";
};
export const plucking = () => {
  return "plucking";
};

// pretend this is another file
// to import
import playGuitar from "./modules.js";
import { shredding as shred, plucking as pluck } from "./modules.js"; // can rename the functions but dont have to with as ...

console.log(playGuitar());
console.log(shredding());
console.log(plucking());

// can import all of the functions that were exported instead
import * as Guitars from "./modules.js";
console.log(Guitars.default()); // this function is play guitar but need it to be named default since it is default
console.log(Guitars.shredding());
console.log(Guitars.plucking());


// pretend new file
// export a class
export default class User {
  constructor(email, name) {
    this._id = email;
    this._name = name;
  }

  greeting() {
    return `Hi my name is ${this._name}.`
  }
}

// pretned new file
// import class
import User from "./modules.js";
const me = new User("email@hi.com", "landon");
console.log(me);
console.log(me.greeting());