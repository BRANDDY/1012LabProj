//test cases 1012a22s
assert = chai.assert;

describe('Testing function rollDie() of Task 4', function() {
    /*  1: write a unit test to verify if rollDie() returns a value that 
       is not null or undefined.
       Hint: see how this has been done  in task1generateNumTest.js */
    var result = rollDie();
    it('Test 1: generateNum() returns something', function() {
        assert.exists(result, 'the return value is not null or undefined');
    });


    /*  2: write a unit test to verify if rollDie() returns a value that 
       is from type number.
       Hint: see how this has been done in task1generateNumTest.js */

    it('Test 2: the returned value is from type number', function() {
        assert.typeOf(result, 'number');
    });



    /*  3: write a unit test to verify if rollDie() returns a value that 
       is greater than or equal 1. */
    it('Test 3: the returned value is >= 1', () => {
        for (var i = 1; i <= 1000; i++) {
            assert(rollDie() >= 1);
        }
    });

    it('Test 4: the returned value is <= 6', () => {
        for (var i = 1; i <= 1000; i++) {
            assert(rollDie() <= 6);
        }
    });

    /* TO DO: the above limit the range to 1-6 but can be real number. 
	complete the following test case check it is a natural number  */

    it('Test 5: the returned value is a **natural** number between 1 and 6', () => {
        var result;
        for (var i = 1; i <= 1000; i++) {
            result = rollDie() % 1;
            assert(result == 0);
        }
    });
})