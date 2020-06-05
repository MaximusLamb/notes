const Input = require('./lib/Input');
const Note = require('./lib/NoteSchema');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notary', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let input = new Input(process.argv);

const isValid = input.valid();
// Input(notes) ? Note(notes) : console.log('Bad Input');

isValid ? (Note.execute(input)) : console.log('Fail');