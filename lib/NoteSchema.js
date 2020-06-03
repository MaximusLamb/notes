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
            })
        }
        case 'list': {
            return this.find()
        }
        case 'delete': {
            return this.findByIdAndDelete({
                _id: action.payload
        })
        }
    }
}

module.exports = mongoose.model('Note', noteSchema);