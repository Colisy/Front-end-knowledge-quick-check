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

4. 属性的可枚举性

   1. 可枚举性

      >对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。

      ```javascript
      let obj = { foo: 123 };
      Object.getOwnPropertyDescriptor(obj, 'foo')
      //  {
      //    value: 123,
      //    writable: true,
      //    enumerable: true,
      //    configurable: true
      //  }
      ```

   2. 忽略enumerable为false的属性

      1. for...in循环：只遍历对象**自身的和继承**的可枚举的属性。
      2. Object.keys()：返回对象**自身**的所有可枚举的属性的键名。
      3. JSON.stringify()：只串行化对象**自身**的可枚举的属性。
      4. Object.assign()： 忽略enumerable为false的属性，只拷贝对象**自身**的可枚举的属性。

    3. 常见的enumerable为false的属性

        对象原型的toString方法，以及数组的length属性

        ES6 规定，所有 Class 的原型的方法都是不可枚举的。

        ```javascript
          Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
          // false

          Object.getOwnPropertyDescriptor([], 'length').enumerable
          // false

          Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable
          // false
        ```

5. 属性的遍历

    1. for...in

        遍历对象**自身的和继承**的**可枚举**属性（不含 Symbol 属性）

    2. Object.keys(obj)

        返回一个数组，包括对象**自身**的（不含继承的）所有**可枚举**属性（不含 Symbol 属性）的键名

    3. Object.getOwnPropertyNames(obj)

        返回一个数组，包含对象**自身**的所有属性（不含 Symbol 属性，但是**包括不可枚举属性**）的键名

    4. Object.getOwnPropertySymbols(obj)

        返回一个数组，包含对象**自身**的所有 **Symbol 属性**的键名。

    5. Reflect.ownKeys(obj)

        返回一个数组，包含对象**自身**的（不含继承的）**所有键名**，不管键名是 Symbol 或字符串，也不管是否可枚举。

6. super 关键字

    指向当前对象的原型对象。

    ```javascript
      const proto = {
        foo: 'hello'
      };

      const obj = {
        foo: 'world',
        find() {
          return super.foo;
        }
      };

      Object.setPrototypeOf(obj, proto);
      obj.find() // "hello"    
    ```

    只能用在对象的方法之中

    ```javascript
      // 报错
      const obj = {
        foo: super.foo
      }

      // 报错
      const obj = {
        foo: () => super.foo
      }

      // 报错
      const obj = {
        foo: function () {
          return super.foo
        }
      }
      //第二种和第三种写法是super用在一个函数里面，然后赋值给foo属性。
    ```

    super.foo等同于Object.getPrototypeOf(this).foo.call(this)。

    ```javascript
    const proto = {
      x: 'hello',
      foo() {
        console.log(this.x);
      },
    };

    const obj = {
      x: 'world',
      foo() {
        super.foo();
      }
    }

    Object.setPrototypeOf(obj, proto);

    obj.foo() // "world"
    ```

7. es9 将扩展运算符（...）引入了对象

    ```javascript
    let z = { a: 3, b: 4 };
    let n = { ...z };
    n // { a: 3, b: 4 }
    ```

    扩展运算符后面不是对象，则会自动将其转为对象。

    ```javascript
    // 等同于 {...Object(1)}
    {...1} // {}
    ```

    ```javascript
    {...'hello'}
    // {0: "h", 1: "e", 2: "l", 3: "l", 4: "o"}
    ```

8. 对象的api