const palindrome = require('./palindrome');

describe('Palindrome', () => { 
    it('should be a function', () => {
        expect(typeof palindrome).toEqual('function');
    });

    it('should return a boolean', () => {
        expect(typeof palindrome('hello')).toEqual('boolean');
    });

    it('should return true if is a palindrome', () => {
        expect(typeof palindrome('kayak')).toBeTruthy();
        expect(typeof palindrome('soros')).toBeTruthy();
        expect(typeof palindrome('rotator')).toBeTruthy();
    });

    it('should return false if is not a palindrome', () => {
        expect(typeof palindrome('hello')).toBeFalsy();
        expect(typeof palindrome('endri')).toBeFalsy();
        expect(typeof palindrome('otr')).toBeFalsy();
    });

    it('should return false if includes spaces', () => {
        expect(typeof palindrome('wo w')).toBeFalsy();
        expect(typeof palindrome(' wow')).toBeFalsy();
        expect(typeof palindrome('ka y ak')).toBeFalsy();
    });
})