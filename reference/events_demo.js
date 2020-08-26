const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter {}

//init objects
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => console.log('Event fired!'));

//init event
myEmitter.emit('event');