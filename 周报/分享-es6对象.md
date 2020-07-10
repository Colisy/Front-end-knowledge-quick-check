# es6 对象

1. 属性的简洁表示方法

    ```javascript
    let birth = '2000/01/01';

    const Person = {

      name: '张三',

      //等同于birth: birth
      birth,

      // 等同于hello: function ()...
      hello() { console.log('我的名字是', this.name); }

    };
    ```

    ```javascript
    const cart = {
      _wheels: 4,

      get wheels () {//取值函数 - cart.wheels 调用
        return this._wheels;
      },

      set wheels (value) {//存值函数 - cart.wheels = xxx 调用
        if (value < this._wheels) {
          throw new Error('数值太小了！');
        }
        this._wheels = value;
      }
    }
    ```

2. 属性名表达式

    ```javascript
    //属性名 - 表达式
    obj['a' + 'bc'] = 123;
    //属性名 - 变量
    let lastWord = 'last word';

    const a = {
      [lastWord]: 'world'
    };
    //属性名表达式 - 不仅赋值要用[],读取也只能用[]
    a[lastWord] // "world"
    a.lastWord //undefined
    //方法名也可以用表达式
    let obj = {
      ['h' + 'ello']() {
        return 'hi';
      }
    };

    obj.hello() // hi
    //属性名只能是字符串，map数据类型的key可以是对象
    const keyA = {a: 1};
    const keyB = {b: 2};

    const myObject = {
      [keyA]: 'valueA',
      [keyB]: 'valueB'
    };

    myObject // Object {[object Object]: "valueB"}
    ```

3. 方法的 name 属性

    ```javascript
    const person = {
      sayName() {
        console.log('hello!');
      },
    };

    person.sayName.name   // "sayName"
    //Function构造函数创造的函数
    (new Function()).name // "anonymous"
    //bind方法创造的函数
    var doSomething = function() {
      // ...
    };
    doSomething.bind().name // "bound doSomething"
    //对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。
    const key1 = Symbol('description');
    const key2 = Symbol();
    let obj = {
      [key1]() {},
      [key2]() {},
    };
    obj[key1].name // "[description]"
    obj[key2].name // ""
    ```

4. 属性的可枚举性和遍历

   1. 可枚举性

      >对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。

    
   2. 遍历