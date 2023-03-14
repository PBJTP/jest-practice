const capitalize = require('./capitalize');

test('capitalize the first word of a given string', () => {
    expect(capitalize('word')).toBe('Word');
    expect(capitalize('wordy words')).toBe('Wordy words');
});