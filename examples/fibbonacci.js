var trollscript = require('../trollscript.js');

var outputBuffer = [];

trollscript.compile("trooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooooolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloooooloolooloolooloolooloolooloolooloolooloolooloolooooooooloooloollloooooooooooooolooloolooloolooloolooloolooloooloollloolloooolooooollllooooolooooooolllooolloololloolloololoooollloooolooooooolllooloolooloolooloollllooollooololooooolllllooolloolllllooooooooooloolooloolooloolooloolooloolooollloolloooollllooooolooooooolllooolloololloolloololoooollloooolooooooollloolooloolooloollllooolloollllloooooollooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloololoolloolllllllloolllooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloololoolloolllllllloolooloololoolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloolooloololoolloollllloolooloolooloolooloolloooooloooooooollooooooooloooloololllllooolloooooloooloololooooolllllooollooololooooollllloolooloololllllooloololoololooloolooll.");

trollscript.run(function(output){ outputBuffer.push(output); });

console.log(outputBuffer.join(""));
