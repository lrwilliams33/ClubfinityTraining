const add = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = {add, sub} // export the functions

// alternate way to export
exports.adds = (a, b) => a + b;
exports.subs = (a, b) => a - b;