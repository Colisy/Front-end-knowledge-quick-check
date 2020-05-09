//promise核心功能就是解决异步
//回调函数放入数组中，等待状态结束才执行
new MyPromise((res, rej) => {
  //异步执行
  setTimeout(() => {
    //...成功
    res(value)
    //...失败
    rej(error)
  }, 2000)
}).then(value => {

}, error => {

}).then(value => { //链式调用,value受上一链影响

}, error => {

})
class MyPromise {
  constructor(fn) {
    this.states = {
      pending: 'pending',
      resolve: 'resolve',
      reject: 'reject',
    }
    this.state = this.states.pending
    this.value = null
    this.resolveCallback = []
    this.rejectCallback = []
    //存疑
    MyPromise.that = this
    fn(MyPromise.resolve, MyPromise.reject)
  }
  //class中定义的static方法，在使用时可以直接调用，不用实例化
  static resolve(value) {
    const that = MyPromise.that
    that.state = that.states.resolve
    that.value = value
    that.resolveCallback.map(cb => that.value = cb(that.value))
  }
  static reject(value) {
    const that = MyPromise.that
    that.state = that.states.reject
    that.value = value
    that.resolveCallback.map(cb => that.value = cb(that.value))
  }
  then(onResolve, onReject) {
    const {
      pending,
      resolve,
      reject
    } = this.states
    const f = typeof onResolve === 'function' ? onResolve : c => c
    const r = typeof onReject === 'function' ? onResolve : c => {
      throw c
    }
    switch (this.state) {
      case pending:
        this.resolveCallback.push(f)
        this.rejectCallback.push(r)
        break;
      case resolve:
        this.value = f(this.value)
        break;
      case reject:
        this.value = r(this.value)
        break;
    }
    return this
  }
}
//all
MyPromise.all = function (...promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(data => {
          result[i] = data;
          if (index === promises.length-1) {
            resolve(result);
          }
        }, err => {
          reject(err);
          return;
        });
      }
    }
  });
}
//race
MyPromise.race = function (...promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve();
    } else {
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(data => {
          resolve(data);
        }, err => {
          reject(err);
          return;
        });
      }
    }
  });
}