const { format } = require('date-fns'); // import this module

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log('hello');

const {v4: uuid} = require('uuid'); // how you have to import uuid module
console.log(uuid());
