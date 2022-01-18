// Globals - No window

// _dirname = gives path to current directory 
// _filename = gives file name
// require = function to use modules (CommonJS)
// module = info abput current module (file)
// process = info about env where the programs is being executed

const names= require('./2-modules_');           //require is function
console.log(names)
const modules= require('./3-exportAlternative')
console.log(modules);

const sum=require('./4-default')        //when you import module you also invocted it


