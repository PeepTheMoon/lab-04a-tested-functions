const test = QUnit.test;

// test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    // assert.equal(true, false);
// });

function subtract(x, y) {
    return x - y;
}

test('subtract function', function(assert) {
    
    const x = 5;
    const y = 2;
    const expected = 3;

    const difference = subtract(x, y);
    
    assert.equal(difference, expected);

});

function multiply(x, y) {
    return x * y;
}

test('multiply function', function(assert) {
    const x = 4;
    const y = 3;
    const expected = 12;
    const total = multiply(x, y);
    assert.equal(total, expected);
});

function divide(x, y) {
    return x / y;
}

test ('divide function', function(assert) {
    const x = 6;
    const y = 2;
    const expected = 3;
    const total = divide(x, y);
    assert.equal(total, expected);
});

function divideAgain(x, y) {
    return x / y;
}

test('divide second time function', function(assert) {
    const x = 7;
    const y = 0;
    const expected = Infinity;
    const total = divideAgain(x, y);
    assert.equal (total, expected);
});

function isEven(i) {
    if(i % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

test('isEven function', function(assert) {
    const x = 6;
    const y = 7;
    const expected = true;
    const expectedY = false;
    const even = isEven(x);
    const odd = isEven(y);
    assert.equal(even, expected);
    assert.equal(odd, expectedY);
});

function getEvenNumber(someNumber) {
    const array = [];

    for(let i = 0; i < someNumber; i++) {
        const itIsEven = i % 2 === 0;
        const itIsNotZero = i !== 0;
        if(itIsEven && itIsNotZero) {
            array.push(i);
        }
    }
    return array;
}

test('getEvenNumbers', function(assert) {
    const expected = [2, 4, 6, 8];
    const result = getEvenNumber(9);
    assert.deepEqual(result, expected);

});