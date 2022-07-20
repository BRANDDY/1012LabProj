//test cases 1012a22s
assert = chai.assert;

describe('Testing function counter() of Task 6', function() {

    it('Test 1: counter() returns 1 after 19 calls', function() {
        for (var k = 1; k <= 19; k++)
            counter();
        assert.equal(counter(), 1);
    });
    /* TODO 1: write a test case to verify the counter returns 0 after 20 calls 
	  hint: after Test 1, there are already 19 calls above  */
    it('Test 2: counter() returns 0 after 20 calls', function() {
        i = 21;
        for (var k = 1; k <= 20; k++)
            counter();
        assert.equal(counter(), 0);
    });

    /* TODO 2: write a test case to verify the counter returns BOOM! after 21 calls
	   hint: after Test 2, there are already 20 calls above  */
    it('Test 3: counter() returns BOOM! after 21 calls', function() {
            i = 21;
            for (var k = 1; k <= 21; k++)
                counter();
            assert.equal(counter(), "BOOM!");
        }

    );

    /* TODO 3: write a test case to verify the counter returns BOOM! for next 50 follow up calls
	 Hint: use a loop to generate 50 follow up calls, and check each result.
	*/
    it('Test 4: counter() returns BOOM! for the follow up calls', function() {
            for (var k = 1; k <= 50; k++)
                counter();
            assert.equal(counter(), "BOOM!");
        }

    );
});