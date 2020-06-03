// const Input = require('./Input')

// dumbShit = ['node', 'index.js', '--add', 'My Note']

// describe('Input class', () => {

//     it('Inputs a note', () => {

//         const input = new Input(dumbShit);

//         expect(input.type).toEqual('add');
//         expect(input.payload).toEqual('My Note');
//     })

//     it('is valid', () => {

//         const input = new Input(dumbShit);

//         expect(input.valid).toBeTruthy();
//     });
      
// })





// describe('input functions', () => {
//     it('can parse command line arguments', () => {
//         const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
//         const action = parse(commandLineArguments);

//         expect(action).toEqual({
//             type: 'add',
//             payload: 'I am a note'
//         });
//     });

//     it('can validate command line arguments', () => {
//         const action = {
//             type: 'add',
//             payload: 'My Note'
//         };

//         const isValid = valid(action);

//         expect(isValid).toBeTruthy();
//     });

//     it('can validate command line arguments', () => {
//         const action = {
//             type: 'something else',
//             payload: 'My Note'
//         };

//         const isValid = valid(action);

//         expect(isValid).toBeFalsy();
//     });
// });