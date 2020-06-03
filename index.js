const Input = require('./lib/Input');
const Note = require('./lib/notes');

let input = new Input(process.argv);

const isValid = input.valid();
// Input(notes) ? Note(notes) : console.log('Bad Input');

isValid ? Note.execute(input) : console.log('Fail');