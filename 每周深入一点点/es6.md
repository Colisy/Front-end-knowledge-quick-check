# es6
###### 数据类型
- 基本数据类型symbol，唯一值
- Map对象
  >Map的key相比较普通对象来说更为灵活，普通对象的key只能以基础数据类型作为key值，并且所有传入的key值都会被转化成string类型，而Map的key可以是各种数据类型格式。
- WeakMap
  只能以复杂数据类型作为key，并且key值是弱引用，对于垃圾回收更加友好。
- Set对象
  >允许你存储任何类型的唯一值,可以去重`[...new Set(arr)]`
###### 函数
- 箭头函数
  - 箭头函数没有 this，所以需要通过查找作用域链来确定 this 的值。
  - 不能用call()、apply()、bind()方法修改里面的this
  - 没有 arguments
  - 不能通过 new 关键字调用
  - 不存在prototype这个属性
###### 声明
- let/const
  - 块级作用域
  - 不存在变量提升
  - 暂时性死区
  - 不允许重复声明
- 变量解构赋值
- class
###### 字符串
- 模板字符串
###### 数组
- 扩展运算符...
###### 对象
- Object.defineProperty
- Object.assign
- Object.keys
###### Proxy
###### 模块化
