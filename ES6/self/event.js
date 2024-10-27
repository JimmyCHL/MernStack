const { EventEmitter } = require('events')

let myEvent = new EventEmitter()

const listener1 = () => {
  console.log('listener1 executed')
}

myEvent.addListener('nameEvent', listener1)

myEvent.on('nameEvent', () => {
  console.log('NameEvent has been triggered and is being listened to second time')
})

myEvent.on('nameEvent', () => {
  console.log('NameEvent has been triggered and is being listened to third time')
})

console.log(myEvent.listenerCount('nameEvent') + ' listeners are listening to nameEvent')

// Fire the nameEvent event
myEvent.emit('nameEvent')

myEvent.removeListener('nameEvent', listener1)

console.log(myEvent.listenerCount('nameEvent') + ' listeners are listening to nameEvent')

myEvent.emit('nameEvent')
