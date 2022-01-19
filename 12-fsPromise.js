const {readFile,writeFile}= require('fs').promises
// const util = require('util')
// const readFilePromise= util.promisify(readFile);
// const writeFilePromise= util.promisify(writeFile);

const start= async()=>{
    try {
        const first =await readFile('./content/first.txt','utf8');
        const second =await readFile('./content/subfolder/test.txt','utf8');
        await writeFile('./content/subfolder/promise.txt',`This is edited and creatded using file promise method please revise :( 
            \\\t ${first} ${second}`,{flag:'a'});
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
    
}

start()

// const getText = (path) =>{
    //     return new Promise ((resolve,reject)=>{
    //         readFile(path,'utf8',(err,data)=>{
    //             if (err){
    //                 reject(err)
    //             }else{
    //                 resolve(data)
    //                 console.log(data)
    //             }
    //         })
    //     })
    // }

    // getText('./content/first.txt')
//     .then( result =>console.log(result))
//     .catch(err =>console.log(err));

