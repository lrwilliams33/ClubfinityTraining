const logEvents = require('./middleware/logEvents'); // import log events function from file

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// inititalize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

// Emit the event
myEmitter.emit('log', 'Log event emitted!');