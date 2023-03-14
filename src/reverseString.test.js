const reverseString = require('./reverseString');

test('creverse the order of a given string', () => {
    expect(reverseString('word')).toBe('drow');
    expect(reverseString('wordy words')).toBe('sdrow ydrow');
});