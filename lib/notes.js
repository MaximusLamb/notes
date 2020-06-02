const add = action => {
    const note = {
        id: 1,
        text: action.payload
    };
    return note;
};

const execute = action => {
    if (action.type === 'add' || action.type === 'a') {
        return add(action);
    } else {
        return {
            error: 'crap balls'
        }
    }
};

module.exports = {
    execute,
    add
};