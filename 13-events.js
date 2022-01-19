const EventEmitter = require('events');

const customEmitter = new EventEmitter()

//.on => listen for event
//.emit => emit an event

//can pass paremeter with .emit method
customEmitter.on('event name here (response)',(name,id)=>{     //listen for emit event
    console.log(`data received by ${name} and ${id}`);
    console.log('data received');
})
customEmitter.on('event name here (response)',()=>{     
    console.log('same logic here')
})

//can pass arguments for the .on event
customEmitter.emit('event name here (response)','john',34);   //should be same as .on event name

