const fs = require('fs'); // import fs module
const path = require('path'); // import path

// read from a file
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // prints readable data from the starter file
});

//console.log("hello"); // this will output first because the code above is still processing

// write "nice to meet you" to a file
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
  if (err) throw err;
  console.log("Write complete"); // prints readable data from the starter file
});

// appends to an existing file (creates a file if name doesnt exist)
// make sure the file you are appending to has already been created
fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing', (err) => {
  if (err) throw err;
  console.log("Write complete"); // prints readable data from the starter file

  fs.rename(path.join(__dirname, 'files', 'test.txt'), path.join(__dirname, 'files', 'newFile.txt'), (err) => {
    if (err) throw err;
    console.log("Rename complete"); // prints readable data from the starter file
  });
});


// alternative/better way to do this (better way to make sure that node finishes reading the file)
const fsPromises = require('fs').promises; // import fs promises module
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt')); // deletes this file
    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\nNice to meet you.');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'newFile.txt'));

  } catch (err) {
    console.error(err);
  }
}

fileOps()



// exit on uncaught error
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});