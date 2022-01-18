const {readFileSync,writeFileSync}= require('fs');
//other method
const fs=require('fs')
fs.readFileSync;

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/subfolder/test.txt','utf8');

console.log(first,'and',second);

//writefileSync create a file if it doesnt exist and write on it
//will override the file data
//flag:'a' will append the data in file rather than overriding

writeFileSync(`./content/subfolder/folderCreatedUsingReadFileSync.txt`,
`this text is added using readfilesync : ${first},${second}`,
{flag:'a'}  
);


