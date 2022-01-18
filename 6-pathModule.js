const path = require('path');

console.log(path.sep)

const filepath= path.join('/content/subfolder','test.txt')  //normalise the path
console.log(filepath);

const base=path.basename(filepath);     //returns laste file
console.log(base)

const absolute= path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);      //absolute path to the folder :\Users\1\Desktop\VSCode\Node.js\content\subfolder\test.txt

