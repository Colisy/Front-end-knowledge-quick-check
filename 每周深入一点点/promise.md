# promise
## 作用
- 回调地狱，函数嵌套，理解排查困难
## 基本用法
 - Promise.prototype.finally：无论失败成功都会执行
 - Promise.all
 - Promise.race
 - 链式调用，实例上的方法返回一个promise实例
## 业务场景
1. axios
   - axios是基于promise开发的
   - 使用时，进行二次封装，包一层Promise，并将Promise返回
   - 响应拦截器，进行错误拦截，可以配置全局错误码，和业务模块错误码
2. vuex
    actions中向后台请求数据，为了确保dispatch后拿到数据再进行操作，在请求外面包一层Promise返回
## 任务队列
> 一个宏任务 —> 一队微任务 —> 渲染
宏任务执行完，再执行微任务then
then在promise有结果后才进入微任务
**定时器**是新的宏任务，执行完一个宏任务，再执行第二个，宏任务执行完毕再执行此次宏任务中的微任务
可以理解为await后面的内容就相当于放到了Promise.then的里面
如果不是Promise对象的话，就会直接返回对应的值，相当于Promise.resolve()
优先级process.nextTick 高于 Promise

- Promise.all
接收一组异步任务，然后并行执行异步任务，并且在**所有异步操作执行完**后才执行回调。
- Promise.race 
接收一组异步任务，然后并行执行异步任务，**只保留取第一个**执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃
## 事件循环队列
宏任务微任务都属于事件队列

![](./imgs/事件轮询@promise.png)