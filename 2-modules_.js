//module 
// node uses commonJS, every file in node is module
 
// export default hello;

const suzen='suzen';
const karen='karen';

function hello(name) {
    console.log(name);    
}

hello(suzen);

//good way to export
module.exports= {suzen,karen};      //sending as abject cause of multiple items

