# this指向✌️
>虽然js中是静态作用域，但this像动态作用域,执行时决定，取决于**调用对象**
1. **直接调用** 
>在非严格模式下this指向的是全局对象window，而在严格模式下会绑定到undefined。

2. **对象调用**
>this 永远指向**最后调用**它的那个对象
3. **apply/call/bind**
>传null或undefined时，this将是JS执行环境的全局变量(window/global)。
4. **new调用**
5. **箭头函数**
>没有自己的this，受周围环境影响，沿着作用域链查找确定this。
<br>
箭头函数的this无法通过bind、call、apply来直接修改，但是可以通过改变作用域中this的指向来间接修改。
6. **回调函数**

   - 定时器回调/ajax回调/数组遍历相关方法回调: window (箭头函数例外)
   - dom事件监听回调: dom元素
   - 组件生命周期回调: 组件对象