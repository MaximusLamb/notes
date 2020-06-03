
class Note {

    static add(action) {
        
        let note = {
            id: Date.now(),
            text: action.payload
        };
        console.log(note)
        return note;
    };
    static execute(action) {
        switch(action.type) {
            case 'add':
                return Note.add(action);
            // case 'list':
            //     return list(action);
            // case 'delete':
            //     return delete(action);
    
            default:
                return {
                error: 'Nothing'
            }
        }
    }
}

module.exports = Note;