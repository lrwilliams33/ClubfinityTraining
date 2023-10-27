// node runs in terminal through a server
console.log("Hello");
//console.log(global);

const os = require('os'); // import the module to use the os
console.log(os.type()); // windows info and below
console.log(os.version());
console.log(os.homedir());

console.log(__dirname); // directory path
console.log(__filename); // file name and path

const path = require('path'); // import module to use the path
console.log(path.dirname(__filename)); // directory path
console.log(path.basename(__filename)); // only the file name (server.js)
console.log(path.extname(__filename)); // only extension (.js)
console.log(path.parse(__filename)); // returns object with all the values of the path

const math = require('./math'); // import the math,js file
console.log(math.add(2, 3));

const { sub } = require('./math'); // import only the subtract function
console.log(sub(3, 2));
