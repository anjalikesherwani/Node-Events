eventemitter = require('node:events')

emitter = new eventemitter()

emitter.on('module',(name, type, number)=>{
    console.log (`Hello ,welcome to nsti ${name}.we are currently on ${type} - ${number}`)
})

emitter.emit('module','Allahabad', 'elective', 3)