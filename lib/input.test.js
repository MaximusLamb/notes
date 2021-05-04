const { parse, valid } = require('./input.js')




describe('input functions', () => {
    it('can parse command line arguments', () => {
        //this setup is the test command for a file 
        const commandLineArguments = ['node', 'index.js', 'add', 'bannana', 'idk whate else'];
        const action = parse(commandLineArguments);

        expect(action).toEqual({
            type: 'add',
            payload: ['bannana', 'idk whate else']
        });
    });

    it('can validate command line arguments', () => {
        const action = {
            type: 'add',
            payload: 'My Note'
        };

        const isValid = valid(action);

        expect(isValid).toBeTruthy();
    });

    it('can validate command line arguments', () => {
        const action = {
            type: 'something else',
            payload: 'My Note'
        };

        const isValid = valid(action);

        expect(isValid).toBeFalsy();
    });
});