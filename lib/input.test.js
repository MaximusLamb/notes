const Input = require('./Input')

superFun = ['node', 'index.js', '--add', 'My Note']

describe('Input class', () => {

    it('Inputs a note', () => {

        const input = new Input(superFun);

        expect(input.type).toEqual('add');
        expect(input.payload).toEqual('My Note');
    })

    it('is valid', () => {

        const input = new Input(superFun);

        expect(input.valid());
    });
      
})
