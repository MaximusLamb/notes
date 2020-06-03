const minimist = require('minimist');

dumbShit = ['node', 'index.js', '--add', 'I am a note']

// // valid
// const valid = thing => {

// if (thing.type === 'add') {
//     if(thing.payload) {
//         return true;
//     }
// }
// };

// parse
const parse = array => {

const obj = minimist(array);
delete obj._;

const [[type, payload]] = Object.entries(obj);

    return { 
        type,
        payload 
    }
}



class Input {
    
    constructor(array) {
        
        const { type, payload } = parse(array);
        this.type = type;
        this.payload = payload;
    }

    valid() {

        if (this.type === 'add') {
            if(this.payload) {
                return true;
            }
        }
        };
}


module.exports = Input;
