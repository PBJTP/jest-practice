const analyzeArray = require('./analyzeArray');

test('Return the average, minimum, maximum, and length of an array input, in an object', () => {
    expect(analyzeArray([8,7,6,5,4,3,2,1])).toMatchObject({
        average: 4.5,
        min: 1,
        max: 8,
        length: 8
    });
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length:6
    });
    expect(analyzeArray([535,3,1082])).toMatchObject({
        average: 540,
        min: 3,
        max: 1082,
        length: 3
    });
});