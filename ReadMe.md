# Unit Testing
- A way of testing individual pieces of code called `units`
    - Acceptance Testing
    - system Testing
    - Integration Testing
    - Unit Testing

# Jest
Let's get into some algorithms, but we will do more than just solve them. We will write unit tests using Jest to check our work

- install jest through npm as devDep: $ npm i -D jest
- add our script to package.json

How to create a simple test?
- Create your file 'sum.js'
    - Open the file and create a function sum that add two numbers
- Create the jest file 'sum.test.js'
- Open the sum.test.js and Require the 'sum function'
    - Now write the test function

- Now run the test: $ npm run test

Full Code

```
sum.js
function sum (a, b) {
    return a + b;
}

// Export in order to require somewhere else
module.exports = sum;

sum.test.js
const sum = require('./sum');

test('Adds 1 + 2 to equal 3', () => { 
    expect(sum(1, 2)).toEqual(3);
});

```
```
Output:

$ npm run test

> data_structures_unit-test@1.0.0 test
> jest

 PASS  ./sum.test.js
  √ Adds 1 + 2 to equal 3 (8 ms)

Test Suites: 1 passed, 1 total                                                                                                                          
Tests:       1 passed, 1 total                                                                                                                          
Snapshots:   0 total
Time:        5.744 s
Ran all test suites.

```
