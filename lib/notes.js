const add = action => {
    const note = {
        id: Date.now(),
        text: action.payload
    };

    console.log (`Note added: ${note.text}`)
    return note;
};

const execute = action => {
    switch(action.type) {
        case 'add':
            return add(action);
        // case 'list':
        //     return list(action);
        // case 'delete':
        //     return delete(action);

        default:
            return {
            error: 'Bad Input'
        }
    }
}

module.exports = {
    execute,
    add
};