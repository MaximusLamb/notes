const minimist = require('minimist');

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

        if (this.type === 'add' && this.payload) {
            if(this.payload) {
                return true;
            }
        }
        };
}

module.exports = Input;
