// 发布/订阅模式
class EvenEmitter {
  static evenObj = {}
  on(type,cb){
    if(!EvenEmitter.evenObj[type]){
      EvenEmitter.evenObj[type] = []
    }
    EvenEmitter.evenObj[type].push(cb)
  }
  emit(type,...args){
    EvenEmitter.evenObj[type] && EvenEmitter.evenObj[type].forEach(cb => {
      cb(...args)
    });
  }
  remove(type){
    delete EvenEmitter.evenObj[type]
  }
}
const event = new EvenEmitter()
event.on('click',()=>{
  console.log('click')
})
event.on('click',()=>{
  console.log('click2')
})
event.emit('click')
event.remove('click')
event.emit('click')