# vue-router
## 路由
- 前端路由
  >在SPA中，只有一个 HTML 页面，更新视图而不重新请求页面，每个视图匹配一个特殊的 url，所以有了前端路由的需求。
- hash模式实现依据
  1. hash 值的变化不会导致浏览器像服务器发送请求（锚点）
  2. location.hash可以获取hash值
  3. hashchange是hash值发生改变的调用的函数
- history模式实现依据
  1. history 接口允许操作浏览器的访问的会话历史记录.pushState 和 replaceState，通过这两个 API 可以改变 url 地址且不会发送请求。
  2. 当用户刷新页面之类的操作时，浏览器还是会给服务器发送请求。为了避免出现这种情况，需要服务器的支持，需要把所有路由都重定向到根页面。
- vue-router传值
  1. 动态路由 /:id route.param 
  2. 拼路由地址 ?xx=xx route.query
- 路由守卫
  1. 在失活的组件里调用离开守卫 beforeRouteLeave
  2. 全局前置守卫 beforeEach
  3. 路由配置里调用 beforeEnter
  4. 解析异步路由组件。
  5. 被激活的组件里调用 beforeRouteEnter
   
     组件实例还没被创建，不能获取组件实例 `this`

     可以通过传一个回调给 next来访问组件实例

  6. 全局解析守卫 beforeResolve 
  7. 导航被确认。
  8. 全局后置钩子 afterEach
  9. 触发 DOM 更新。
  10. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
## 实现思路
路由的本质：建立起url和页面之间的映射关系
>监听url变化，拿到path，找到component。主要组件`router-link`和`router-view`。依据`router-link`的to属性，将URL改变成对应的路径。hash模式下，触发hashchange事件的回调，`router-view`拿到path对应的component，然后渲染。

知识准备
- 如何注册Vue插件
  `Vue.use`会自动调用插件对象的install
- Vue的mixin
  影响注册之后所有创建的每个 Vue 实例
- 如何注册组件
  `Vue.component`
- render函数的用法
  ```
  render: function (h) {
    return h('a', { attrs: { href: `#${this.to}` } }, this.$slots.default);
  }
  ```

[参考](https://segmentfault.com/a/1190000022105972)