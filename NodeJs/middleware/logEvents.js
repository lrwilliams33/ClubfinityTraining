const { format } = require('date-fns'); // import this module

//console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

//console.log('hello');

const {v4: uuid} = require('uuid'); // how you have to import uuid module
//console.log(uuid());

// type nodemon filename to automatically update terminal when saved changes

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
// import other modules

// log events function
const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }
    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
  } catch (err) {
    console.log(err);
  }
}

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
  console.log(`${req.method} ${req.path}`);
  next();
}

module.exports = { logger, logEvents };