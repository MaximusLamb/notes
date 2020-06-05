const Input = require('./lib/Input');
const Note = require('./lib/notes');

const input = new Input(process.argv);

const isValid = input.valid();

isValid ? Note.execute(input) : console.log('Fail');
