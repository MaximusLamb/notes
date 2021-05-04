
// This checks if the command is valid
const valid = thing => {
    if (thing.type === 'add') {
        if (thing.payload) {
            return true;
        }
    }
};

// this pars the array(witch is the command line argument) 
const parse = array => {
    const type = array[2]
    const payload = [array[3], array[4]]
    return {
        type,
        payload
    }
}


module.exports = {
    valid,
    parse
}