
//this evaluate the notes we are not saving the notes
// you will have to save the log with fs 
// https://nodejs.org/api/fs.html#fs_fspromises_copyfile_src_dest_mode  contains documentation on fs
const add = action => {
    const note = {
        text: action.payload
    };
    //insted of console loging you would save the data.  and fs is a prommis 
    console.log(`Log entries from ${note.text[0]} successfully converted to JSON and stored in ${note.text[1]}`)
    return note;
};

//do command line error handing 
//you would have 2 cases and default
const execute = action => {
    switch (action.type) {
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