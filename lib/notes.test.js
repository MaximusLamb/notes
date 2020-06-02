const { execute, add } = require('./notes')


describe('note functions', () => {
    it('adds a note', () => {
        const action = {
            type: 'add',
            payload: 'Note'
        };

        const result = add(action);

        expect(result).toEqual({
            id: expect.any(Number),
            text: 'Note'
        });
        
    })


    it('executes an action', () => {

        const action= {
            type: 'add',
            payload: 'Note'
        };

        const badAction= {
            type: 'badAdd',
            payload: 'Note'
        };

        const result = execute(action);
        const otherResult = execute(badAction);
        
        expect(otherResult).toEqual({
            error: 'Bad Input'
        })
        
        expect(result).toEqual({
            id: expect.any(Number),
            text: 'Note'
            
        })
        
    })
})
    