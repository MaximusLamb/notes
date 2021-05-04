const { parse, valid } = require('./lib/input.js');
const { execute } = require('./lib/notes')
const minimist = require('minimist');

const notes = parse(process.argv);
console.log(notes)

valid(notes) ? execute(notes) : console.log('Bad Input');

