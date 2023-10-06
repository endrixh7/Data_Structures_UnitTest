const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', ()=>{
    it('should be a function', ()=>{
        expect(typeof fizzbuzz).toEqual('function');
    });
});
