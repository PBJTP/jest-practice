const caeser = require('./caeser');

test('Encrypt a string using the caeser cipher. Input is a string and a shift', () => {
    expect(caeser('word', 5)).toBe('btwi');
    expect(caeser('wordy words', 10)).toBe('gybni gybnc');
    expect(caeser('odin project', 1)).toBe('pejo qspkfdu');
});