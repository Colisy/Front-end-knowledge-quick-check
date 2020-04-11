# vue
## 原理
> 正确高效的使用框架，必要时刻将会解决疑难杂症👍
#### 响应式原理
Observer

观察者，使用 Object.defineProperty 方法对对象的每一个子属性进行**数据劫持**/监听，在 get 方法中进行依赖收集，添加订阅者 watcher 到订阅中心。 在 set 方法中，对新的值进行收集，同时订阅中心通知订阅者们。

watcher

订阅者，首次解析的时候创建，当被观察的值发生变化时，会接收到来自订阅中心 dep 的通知，从而触发依赖更新。

核心方法有： get() 获得getter的值并且重新进行依赖收集 addDep添加一个依赖关系到订阅中心 Dep 集合中 ，update() 更新视图

Dep

调度中心，收集观察者 Watcher 和通知观察者目标更新。 每一个属性都有一个 Dep 对象,用于存放所有订阅了该属性的观察者对象，当数据发生改变时，会遍历观察者列表（dep.subs），通知所有的 watcher，让订阅者执行自己的 update 逻辑。

###### 响应式数据注意事项⚠️
vue无法检测到对象属性的添加或删除。但可以通过set方法使数据变成响应式并且触发更新页面。
```
单个属性：vm.$set(this.someObject,'b',2)
多个属性：vm.someObject = Object.assign({}, vm.someObject, { a: 1, b: 2 })
```

vue对数组放弃采用object.defineProperty，出于对性能和收益的权衡，采用监听7种变异方法,push/pop/shift/unshift/sort/splice/reverse，使新数据变响应并且手动触发页面更新，Vue.set()对于数组的处理其实就是调用了splice方法

#### 为什么vue3.0使用proxy实现响应式？
- Object.defineProperty只能劫持对象的属性，需要遍历对象的每个属性,而 Proxy 是直接代理对象。
- Object.defineProperty对新增属性需要手动进行 Observe。
- Es6 proxy 兼容性差，但存在新标准红利。
  
#### 虚拟DOM
>虚拟DOM总结：
>- 用JavaScript对象模拟DOM
>- 把此虚拟DOM转成真实DOM并插入页面中
>- 如果有事件发生修改了虚拟DOM
>- diff新老两棵虚拟DOM树的差异
>- 每点差异都要及时patch到真实dom上  

>虚拟DOM有效的降低大面积（真实DOM节点）的重排和排版，因为最终与真实DOM比较差异，可以只渲染局部。

>Vue 之所以引入了 Virtual DOM，更重要的原因是为了解耦 HTML 依赖，这带来两个非常重要的好处是：
>- 不再依赖 HTML 解析器进行模版解析，可以进行更多的 AOT 工作提高运行时效率：通过模版 AOT 编译，Vue 的运行时体积可以进一步压缩，运行时效率可以进一步提升；
>- 可以渲染到 DOM 以外的平台，实现 SSR、同构渲染这些高级特性，Weex 等框架应用的就是这一特性。

1. VNode模拟dom树 ![](imgs/Vnode@vue.jpg)
2. diff算法（就地修改） ![](imgs/diff算法/diff_patch@vue.jpg)
   - 同层级比较，并不需要递归![](imgs/diff算法/diff@vue.jpg)
   - Diff 的比较逻辑：能不移动，尽量不移动。不行就移动，实在不行就新建
     1. 能不移动，尽量不移动
    旧头 == 新头 旧尾 == 新尾
     2. 没得办法，只好移动
     旧头 == 新尾 旧尾 == 新头（首尾查找）
     看看有没有一样的key，有的话看看有没有变化，（单个查找）
     3. 实在不行，新建或删除
> 在比较过程中，不会对两个数组进行改变（比如不会插入，不会删除其子项）
而所有比较过程中都是直接 插入删除 真实页面DOM  
3. patch  

![](./imgs/diff算法/diff_example_1@vue.jpg)
![](./imgs/diff算法/diff_example_2.jpg)
![](./imgs/diff算法/diff_example_3.jpg)
![](./imgs/diff算法/diff_example_4.jpg)
![](./imgs/diff算法/diff_example_5.jpg)

## 组件通信
- props
  父传子
- emit
  子传父，父组件自定义事件传给子组件（非props接收），子组件emit触发自定义事件，以参数形式将值传给父组件
- v-model其实是props,emit的语法糖
  v-model原理
`<input :value="msg” @input="msg=$event.target.value" />`
- .sync语法糖
- $ref
  调用子组件的方法，传参
- provide & inject 
  主要为高阶插件/组件库提供用例
- 插槽
  父向子传递标签
- vuex
![](./imgs/vuex@vue.png)
## 生命周期
![](imgs/生命周期@vue.png)

#### 创建阶段
- beforeCreate: 实例、组件通过new Vue() 创建出来之后会初始化事件和生命周期，然后才会执行beforeCreate钩子函数.
  
  这个时候，数据data还没有挂载到vm对象，无法访问到数据data和真实的dom挂载元素el
- created: **挂载数据data**，绑定事件等等，然后才会执行created钩子函数.
  
  这个时候,已可使用到数据data，也可更改数据data，在这里更改数据不会触发updated钩子函数，一般可以在这里做初始数据的获取。注意：此时挂件元素el还不存在
- beforeMount: 首先会**判断对象是否有挂载元素el选项**。如果有的话就继续向下编译，如果没有el选项，则停止编译，也就意味着停止了生命周期，直到在该vue实例上手动挂载，即调用vm.$mount(el)。
  
  编译模板为虚拟dom放入到render函数中准备渲染，然后执行beforeMount钩子函数，
  
  在这里也可以更改数据，不会触发updated
- mounted: render后，渲染出**真实dom**，然后执行mounted钩子函数
  
  组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了，可以在这里操作真实dom
#### 运行阶段  
- beforeUpdate: data更改之后，会立即执行beforeUpdate
- updated: 数据已经更改完成，dom也重新render完成
- beforeDestroy: 调用$destroy方法后，在实例销毁之前 立即执行beforeDestroy

  实例仍然完全可用,一般在这里做一些善后工作，例如清除计时器
- destroyed: 组件的数据绑定、监听...去掉，执行 destroyed钩子函数

  Vue 实例指示的所有东西都会解除绑定，所有的事件监听器会被移除，所有的子实例也会被销毁

#### 父子组件生命周期顺序
从外到内，然后再从内到外

destroyed和mounted一样都是先子再父

![](imgs/父子组件生命周期顺序@vue.png)
## vue性能优化
大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容
Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。
beforeDestroy() { clearInterval(this.timer) }清除定时器

## 由面试题引发的思考
#### MVVM
  >Mvvm 软件架构设计模式，包含多种设计模式。
  Model代表数据模型负责业务逻辑和数据封装，View代表UI组件负责界面和显示，ViewModel监听模型数据的改变和控制视图行为，处理用户交互，简单来说就是通过双向数据绑定把View层和Model层连接起来。在MVVM架构下，View和Model没有直接联系，而是通过ViewModel进行交互，我们只关注业务逻辑，不需要手动操作DOM，不需要关注View和Model的同步工作。
#### 组件中的data为什么是函数
  >组件是构造函数，注册组件是创建实例对象，data是函数，每个实例可以维护一份被返回对象的独立的拷贝
#### keep-alive
  - keepalive是一个抽象的组件，缓存的组件不会被 mounted,为此提供activated和deactivated钩子函数
  - 3个属性,include/exclude/max,先匹配被包含组件的 name 字段，如果 name 不可用，则匹配当前组件 components 配置中的注册名称。
  - 与动态组件结合
    ```
    <!-- 失活的组件将会被缓存！-->
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
    ```
  - 与vue-router结合
    ```
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    ```
#### 异步组件
  - import
  
    `() => import('./my-async-component')` 

     这个 `import` 函数会返回一个 `Promise` 对象。
  - webpack代码分割
  
    `require(['./my-async-component'], resolve)`
  
#### vue为什么异步渲染  
  >Vue的变化侦测机制决定了它必然会在每次状态发生变化时都会发出渲染的信号，但Vue会在收到信号之后检查队列中是否已经存在这个任务，保证队列中不会有重复。如果队列中不存在则将渲染操作添加到队列中。
  <br>
  <br>
  之后通过异步的方式延迟执行队列中的所有渲染的操作并清空队列，当同一轮事件循环中反复修改状态时，并不会反复向队列中添加相同的渲染操作。
  <br>
  <br>
  所以我们在使用Vue时，修改状态后更新DOM都是异步的。

#### nextTick
  1. 原因：Vue DOM更新是异步执行的，即修改数据时，视图不会立即更新。为了确保拿到更新后的DOM，设置了nextTick。
  2. 原理：nextTick接受一个回调函数时，传入的回调函数会在callbacks中存起来，在flushCallbacks函数中遍历执行callbacks，flushCallbacks放到微任务或宏任务中延迟执行。根据当前环境判断使用哪种方式实现，优先级 Promise.then > MutationObserver(微任务) > setImmediate（node中宏任务） > setTimeout(fn, 0)
#### 指令
  1. v-html : 样式事件会失效
  2. v-if / v-show : v-show是dom树上有内容，不显示，display：none；v-if是dom树上无内容。v-show在初始渲染时有更高的开销，但是切换开销很小，更适合频繁切换的场景，v-if反之
  3. v-if & v-for : 不要同时使用在一个标签上，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中
#### 修饰符
  事件修饰符 
  - stop阻止冒泡事件 
  - prevent阻止默认事件 
  - once一次渲染 静态信息避免重复渲染
#### $extend/$mount
  创建构造器挂载到页面

  实现全局提示组件

![](./imgs/2020面试题@vue.jpg)  



