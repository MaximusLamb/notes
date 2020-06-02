const { parse, valid } = require('./input')




describe('input functions', () => {
    it('can parse command line arguments', () => {
        const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
        const action = parse(commandLineArguments);

        expect(action).toEqual({
            type: 'add',
            payload: 'I am a note'
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