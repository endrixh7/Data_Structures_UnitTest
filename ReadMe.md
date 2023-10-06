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
# Grouping Tests Together

- First put sum.js and sum.test.js in a folder 'sum'
- Second , create two files, fizzbuzz.js and fizzbuzz.test.js and put it to a new folder 'fizzbuzz'
    - Now create the fizzbuzz function within fizzbuzz.js
    - Next create the fizzbuzz test within fizzbuzz.test.js

Now its time for the final stage:
- Open terminal and run our command: $ npm run test
Jest will run both functions

Code: 
```
fizzbuzz.js

function fizzbuzz(number) {
    if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number;
    }
}

// Export this function

module.exports = fizzbuzz;


fizzbuzz.test.js

const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', ()=>{
    it('should be a function', ()=>{
        expect(typeof fizzbuzz).toEqual('function');
    });
});


```

```
Output:

$ npm run test

> data_structures_unit-test@1.0.0 test
> jest

 PASS  sum/sum.test.js
 PASS  fizzbuzz/fizzbuzz.test.js

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.959 s
Ran all test suites.

```
Lets simulate an intention error:

- Open fizzbuzz.test.js file and change .toEqual('string);

```
Code

const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', ()=>{
    it('should be a function', ()=>{
        expect(typeof fizzbuzz).toEqual('string');
    });
});


```

Output:
```
$ npm run test

> data_structures_unit-test@1.0.0 test
> jest

 FAIL  fizzbuzz/fizzbuzz.test.js
  ● fizzbuzz › should be a function
                                                                                                                                                        
    expect(received).toEqual(expected) // deep equality

    Expected: "string"
    Received: "function"

      3 | describe('fizzbuzz', ()=>{
      4 |     it('should be a function', ()=>{
    > 5 |         expect(typeof fizzbuzz).toEqual('string');
        |                                 ^
      6 |     });
      7 | });
      8 |

      at Object.toEqual (fizzbuzz/fizzbuzz.test.js:5:33)

 PASS  sum/sum.test.js
                                                                                                                                                        
Test Suites: 1 failed, 1 passed, 2 total                                                                                                                
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.6 s, estimated 1 s
Ran all test suites.

```