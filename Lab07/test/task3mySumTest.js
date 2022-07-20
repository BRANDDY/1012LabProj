//test cases 1012a22s
assert = chai.assert;

describe('Testing function mySum(upTo) of Task 3', function() {

    it('Test 1: the returned value is from type number', function() {
        assert.isNumber(mySum(3)); // this is the same as assert.typeOf(mySum(3), 'number');
    });

    it(' Test 2: calculates sum of 1 to 3 as 6', () => {
        assert.equal(mySum(3), 6); // this is the same as assert(mySum(3) == 6);
    });

    //ToDo: add two more test cases to further test your prorgram. one for sum of 1 to 10, and one for sum of 1 to 30
    it('Test 3: calculates sum of 1 to 20 as 55', () => {
        assert.equal(mySum(10), 55);
    });

    it('Test 4: calculates sum of 1 to 30 as 465', () => {
        assert.equal(mySum(30), 465);
    });
});