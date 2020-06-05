const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Note = require('./NoteSchema');

const mongodb = new MongoMemoryServer();



describe('Notes model', () => {
    beforeAll(() => {
      return mongodb.getUri()
        .then(uri => mongoose.connect(uri, {
          useUnifiedTopology: true,
          useNewUrlParser: true
        }));
    });
  
    beforeEach(() => {
      return mongoose.connection.dropDatabase();
    });
  
    afterAll(() => {
      return mongoose.connection.close()
        .then(() => mongodb.stop());
    })

    it('can execute and add a note', () => {
        return Note.execute({
            type: 'add',
            payload: 'words'
        })
        .then(note => {
            expect(note.toJSON()).toEqual({
                _id: expect.anything(),
                text: 'words',
                __v: 0
            })
        })
    })

    it('can execute and list all notes', async() => {
        
      await Note.execute({
        type: 'add',
        payload: 'Words'
      });

      await Note.execute({
        type: 'add',
        payload: 'Other Words'
      });

      
      return Note.execute({
        type: 'list',
        payload: true
      })
        .then(notes => {
            expect(notes.map(note => note.toJSON())).toEqual([{
                _id: expect.anything(),
                text: 'Words',
                __v: 0
            },{
                _id: expect.anything(),
                text: 'Other Words',
                __v: 0
            }
          ])
        })
    })

    it('can execute and delete a note', async() => {
      
      const newNote = {
        type: 'add',
        payload: 'Note'
      }
      
      const note = await Note.execute(newNote);

      const removeNote = {
        type: 'delete',
        payload: note.id
      }

     return Note.execute(removeNote)

      .then(note => {
        expect(note.toJSON()).toEqual({
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        })
      })
    })
});