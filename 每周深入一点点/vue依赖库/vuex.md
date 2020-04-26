## vuex
![](../imgs/vuex@vue.png)

[简单实现](https://juejin.im/post/5df535586fb9a016510da2c2#heading-6)

- 内部暴露一个Store类和install方法
- Store类里有，state、getter、mutation、action，dispatch、commit
- 借用 Vue 让 state 变成响应式数据
- dispatch触发action的方法，commit触发mutation的方法，(action中注入的是store实例，可以触发commit从而触发mutation，mutation中注入的是store.state，可以改变state的值)(源码不确定)。
- 为了得知异步是否结束，action方法可以返回promise，因为dispatch返回的是promise，这样可以用`then`获得结果。这也是mutation不能异步必须同步的原因，因为commit没有返回promise。