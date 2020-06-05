const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true
    }
})

noteSchema.statics.execute = function(action) {
    switch (action.type) {
        case 'add': {
            return this.create({
                text: action.payload
            }) .then(notes => {
                console.log(notes)
                return notes;})
            
        
        }
        case 'list': {
            return this.find()
            .lean()
            .then(notes => {
                console.log(notes)
                return notes;
            })
        }
        case 'delete': {
            return this.findByIdAndDelete({
                _id: action.payload
            }) .then(notepoop => { 
                console.log('you deleted! ', notepoop)
                return notepoop;
            })
        }
    }
}

module.exports = mongoose.model('Note', noteSchema);