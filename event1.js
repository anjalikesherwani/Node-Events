eventsemitter = require('node:events')

emitter = new eventsemitter()

emitter.on('order-cake', (type, flavour, size) => {
    console.log(`An order for a ${type} cake with flavour of ${flavour} and size is ${size}`)
})

emitter.on('order-cake',(type) => {
    if (type === "birthday"){console.log('serving a complimentary cold drink')}
})



emitter.emit('order-cake','birthday','vanilla','2pounds')