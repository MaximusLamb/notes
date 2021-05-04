const { parse, valid } = require('./input');
const { execute } = require('./notes')
const minimist = require('minimist');

const notes = parse(process.argv);

valid(notes) ? execute(notes) : console.log('Bad Input');

