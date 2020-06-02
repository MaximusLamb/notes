const minimist = require('minimist');

// valid
const valid = thing => {

if (thing.type === 'add') {
    if(thing.payload) {
        return true;
    }
}
};

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


module.exports = {
    valid,
    parse
}