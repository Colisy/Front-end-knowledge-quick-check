// 发布/订阅模式 在观察者模式的基础上，在目标和观察者之间增加一个调度中心。
// 发布/订阅模式
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
    if(!eventEmitter.eventObj[eventType]){
      return
    }
    eventEmitter.eventObj[eventType].forEach(cb => {
      cb(...args)
    });
  }
  static remove(eventType){
    eventEmitter.eventObj[eventType]?delete eventEmitter.eventObj[eventType]:null
  }
}
eventEmitter.on('click',(...args)=>{
  console.log('onclick',args)
})
eventEmitter.emit('click',1,3,5)
eventEmitter.remove('click')
eventEmitter.emit('click',4,5,6)