const fs = require('fs');

// creates readable stream
const rs = fs.createReadStream('./files/starter.txt', {encoding: 'utf8'});

// creates writable stream
const ws = fs.createWriteStream('./files/newStarter.txt');

// reads the readable stream and writes to the writable stream (copying the data into a new file)
rs.on('data', (dataChunk) => {
  ws.write(dataChunk);
})

// reads the readable stream and writes to the writable stream (copying the data into a new file)
rs.pipe(ws);



// checks if the directory exists
if (fs.existsSync('./new'));

// creates new directory
fs.mkdir('./new', (err) => {
  if (err) throw err;
  console.log('Directory Created');
});

if (fs.existsSync('./new')) {
  // deletes directory if it exists
  fs.rmdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory Removed');
});
}