const caeser = (string, shift) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let newalpha = "";
    let result = "";
    
    //creates new alphabet
    for (let i = 0; i < alphabet.length; i++) {
        let offset = (i + shift) % alphabet.length;
        newalpha += alphabet[offset];
    }
    
    //uses new alphabet to create encrypted message
    for (let i = 0; i < string.length; i++) {
        let index = alphabet.indexOf(string[i]);
        if (index > -1) {
            result += newalpha[index];
        } else {
            result += ' ';
        }
    }

    return result;
}

module.exports = caeser;