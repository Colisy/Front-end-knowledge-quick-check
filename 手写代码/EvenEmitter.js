//观察者模式
class eventEmitter {
  static eventObj = {}
  static on(eventType,cb){
    if(!eventEmitter.eventObj[eventType]){
      eventEmitter.eventObj[eventType] = []
    }
    eventEmitter.eventObj[eventType].push(cb)
  }
  static emit(...args){
    const eventType = args.splice(0,1)
    eventEmitter.eventObj[eventType].forEach(cb => {
      cb(...args)
    });
  }
}
eventEmitter.on('click',(...args)=>{
  console.log('onclick',args)
})
eventEmitter.emit('click',1,3,5)