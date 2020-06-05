
class Note {

    static add(action) {
        
        constructor(text, id) {
            this.id = id || Date.now(),
            this.text = text;
        };
        console.log(note)
        return note;
    };
    static execute(action) {
        switch(action.type) {
            case 'add':
                return Note.add(action);
    
            default:
                return {
                error: 'Nothing'
            }
        }
    }
}

module.exports = Note;