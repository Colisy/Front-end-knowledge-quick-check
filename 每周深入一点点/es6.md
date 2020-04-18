# es6
## 数据类型
- 基本数据类型symbol，唯一值
- Map对象
  >Map的key相比较普通对象来说更为灵活，普通对象的key只能以基础数据类型作为key值，并且所有传入的key值都会被转化成string类型，而Map的key可以是各种数据类型格式。
- WeakMap
  - 只能以复杂数据类型作为key
  - 并且key值是弱引用，对于垃圾回收更加友好

    WeakMap 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的
- Set对象
  >允许你存储任何类型的唯一值,可以去重`[...new Set(arr)]`
## 函数
- 默认值
- 箭头函数
  - 箭头函数没有 this，所以需要通过查找作用域链来确定 this 的值。
  - 不能用call()、apply()、bind()方法修改里面的this
  - 没有 arguments
  - 不能通过 new 关键字调用
  - 不存在prototype这个属性
## 声明
- let/const
  - 块级作用域
  - 不存在变量提升
  - 暂时性死区
  - 不允许重复声明
  - 不成为全局对象的属性

  区别
  - const常量let变量
  - const在声明之后必须马上赋值

  好处
  - 解决了内部变量覆盖外层变量的问题
  - 计数的循环变量泄漏为全局变量  

- 变量解构赋值
  - 对象解构赋值
  - 数组解构赋值
  - 变量重命名
  ```
  let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
  console.log(baz); // "aaa"
  ```
- class
  - 静态属性 static
  - 静态方法 static
  - 实例属性
  - 实例方法

  ```
  class Person {
    constructor(name) {
        this.name = name;
    }

    static age=11

    sayHello() {
        return 'hello, I am ' + this.name;
    }

    static sayBye(){
      return 'bye'
    }
  }
  ```
  ```
  //Babel后，es6 => es5

  function Person(name) {
      this.name = name;
  }
  Person.age = 11
  Person.prototype.sayHello = function () {
      return 'hello, I am ' + this.name;
  };  
  Person.sayBye = function(){
    return 'bye'
  }
  ```
- class继承

  ```
  class Parent {
      constructor(name) {
          this.name = name;
      }
  }

  class Child extends Parent {
      constructor(name, age) {
          super(name); // 调用父类的 constructor(name)
          this.age = age;
      }
  }

  var child1 = new Child('kevin', '18');

  console.log(child1);
  ```
  ⚠️子类必须在 constructor 方法中调用 super 方法，否则新建实例时会报错。因为子类没有自己的 this 对象，而是继承父类的 this 对象，然后对其进行加工。
  ```
  //Babel后，es6 => es5
  //ES5 寄生组合式继承
  //子类构造函数，将属性完全拷贝一份继承，方法通过将自己显示原型指向父类隐性原型继承

  function Parent (name) {
    this.name = name;
  }

  Parent.prototype.getName = function () {
      console.log(this.name)
  }

  function Child (name, age) {
      Parent.call(this, name);
      this.age = age;
  }

  Child.prototype = Object.create(Parent.prototype);

  var child1 = new Child('kevin', '18');

  console.log(child1);
  ```
  ⚠️在 ES6 中，父类的静态方法，可以被子类继承。`Object.setPrototypeOf(Child, Parent)`Child隐性原型指向Parent。
## 字符串
- 模板字符串
## 数组
- 扩展运算符...
  - arguments 转数组
  - 解构
  ```
  let [a, b, ...arr] = [1, 2, 3, 4, 5];
  //arr = [3,4,5]
  const { a, b, ...others } = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  //others = {c: 3, d: 4, e: 5}
  ```
- entries
  ```
  var arr = ["a", "b", "c"];
  var iterator = arr.entries();

  for (let e of iterator) {
      console.log(e);
  }
  ```

## 对象
- Object.defineProperty
- Object.assign
- Object.keys
## for...of循环
使用范围：
- 数组
- 字符串
- Set
- Map
- 类数组对象，如 arguments 对象、DOM NodeList 对象


中断：break (forEach不可break中断)

用法：
```
for (const [i, v] of ['a', 'b', 'c'].entries()) {
  console.log(i, v);
}
```
## 装饰器
节流防抖
```
@debounce(500, true)
  handleClick() {
    console.log('toggle')
  }
```
## Proxy
## 模块化
export/import

1. export 命名导出（每个模块包含任意数量）
2. export default 默认导出（每个模块包含一个）

