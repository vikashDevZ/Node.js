//readfile takes three argument (path,encodingtype,callbackfunction)

const {readFile,writeFile} = require('fs')

readFile('./content/subfolder/test.txt','utf8',(error,result)=>{
    if(error){
        console.log(error)
        return
    }else{
        const first=result;
        readFile('./content/first.txt','utf8',(error,result)=>{
            if(error){
                console.log(error)
                return
            }else{
                const second=result;
                writeFile('./content/subfolder/writeFileAsync.txt',`it is edited by async ${first},${second}`,
                (error,result)=>{
                    if(error){
                        console.log(error)
                        return
                    }else{
                        console.log(result);
                    }
                });
            }
        })
    }
})


