class myPromise {
  constructor(f){
    this.state = myPromise.states.pedding
    this.value = null
    f(myPromise.resolve.bind(this),myPromise.reject.bind(this))
    this.resCallbacks = []
    this.rejCallbacks = []
  }
  static states = {
    pedding:'pedding',
    resolve: 'resolve',
    reject:'reject'
  }
  static resolve (val){
    this.state = myPromise.states.resolve
    this.value = val
    this.resCallbacks.forEach(cb => {
      this.value = cb(this.value)
    });
  }
  static reject (val){
    this.state = myPromise.states.reject
    this.value = val
    this.rejCallbacks.forEach(cb => {
      this.value = cb(this.value)
    });
  }
  then(resCb,rejCb){
    switch (this.state) {
      case 'pedding':
        this.resCallbacks.push(resCb)
        this.rejCallbacks.push(rejCb)
        break;
      case 'resolve':
        resCb(this.value)
      case 'reject':
        rejCb(this.value)
    }
    return this
  }
}
new myPromise((res,rej)=>{
  setTimeout(()=>{
    //res('resolve')
    rej('reject')
  },0)
}).then(v=>console.log(v),e=>console.log(e))