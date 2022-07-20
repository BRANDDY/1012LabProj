//test cases 1012a22s
assert = chai.assert;

describe('Testing function getDateInCustomizedFormat() of Task 5', function() {

    it('Test 1: getDateInCustomizedFormat() returns something', function() {
        assert.exists(getDateInCustomizedFormat(), 'the return value is not null or undefined');
    });

    it('Test 2: the returned value is from type string', () => {
        assert.typeOf(getDateInCustomizedFormat(), 'string');
    });

    it("Test 3: the returned value's length is 38 or 39 characters", () => {
        assert(getDateInCustomizedFormat().length == 38 || getDateInCustomizedFormat().length == 39);
    });

    it("Test 4: the returned value is It's HOUR:MIN. Today is MONTH DAY, YEAR (DAYOFWEEK).", () => {
        /* 1: replace the following message to reflect the exact current time and date, 
        and run the test immediately (within the same minutes */
        assert(getDateInCustomizedFormat() == "It's 12:31. Today is Jul 20, 2022 (Wed)");
    });

});