# es6数组
## 扩展运算符
1. 函数参数
2. 替代函数的 apply 方法
   ```
   // ES5 的写法
    Math.max.apply(null, [14, 3, 77])

    // ES6 的写法
    Math.max(...[14, 3, 77])
   ```
3. 拷贝数组
   ```
    const a1 = [1, 2];
    const a2 = a1;//赋值 -- 地址值

    a2[0] = 2;
    a1 // [2, 2]
   ```

   ```
    const a1 = [1, 2];
    // 写法一
    const a2 = [...a1];
    // 写法二
    const [...a2] = a1;   
   ```
4. 合并数组

    ```
    const arr1 = ['a', 'b'];
    const arr2 = ['c'];
    const arr3 = ['d', 'e'];

    // ES5 的合并数组
    arr1.concat(arr2, arr3);
    // [ 'a', 'b', 'c', 'd', 'e' ]

    // ES6 的合并数组
    [...arr1, ...arr2, ...arr3]
    // [ 'a', 'b', 'c', 'd', 'e' ]    
    ```
5. 生成数组 -- 与解构赋值结合起来

    一定生成数组
    ```
    const [first, ...rest] = [1, 2, 3, 4, 5];
    first // 1
    rest  // [2, 3, 4, 5]

    const [first, ...rest] = [];
    first // undefined
    rest  // []

    const [first, ...rest] = ["foo"];
    first  // "foo"
    rest   // []    
    ```
    ⚠️只能放在参数的最后一位，否则会报错。
6. 字符串
    
    替代 split
    ```
    [...'hello']
    // [ "h", "e", "l", "l", "o" ]
    ```
    Unicode?
7. 有 Iterator 接口的对象 -> 数组    

    原生具备 Iterator 接口的数据结构如下：

    - Array
    - Map
    - Set
    - String
    - TypedArray（二进制数组）
    - 函数的 arguments 对象
    - NodeList 对象

    手动添加
    ```
    Number.prototype[Symbol.iterator] = function*() {
      let i = 0;
      let num = this.valueOf();
      while (i < num) {
        yield i++;
      }
    }

    console.log([...5]) // [0, 1, 2, 3, 4]
    ```
## 数组API

1. Array.from()

    类似数组的对象(有length属性) &  有 Iterator 接口的对象  转为真正的数组

    1. 兼容性 -- 不支持ie
      ```
        const toArray = (() =>
          Array.from ? Array.from : obj => [].slice.call(obj)
        )();    
      ```
    2. 第二个参数,作用类似于数组的map方法
      ```
      //第一步，变成数组；第二步，映射成新数组 
      Array.from(arrayLike, x => x * x);
      // 等同于
      Array.from(arrayLike).map(x => x * x);

      Array.from([1, 2, 3], (x) => x * x)
      // [1, 4, 9]   
      ```
2. Array.of()

    将一组值，转换为数组
    ```
    Array.of() // []
    Array.of(undefined) // [undefined]
    Array.of(1) // [1]
    Array.of(1, 2) // [1, 2]
    ```
    Array.of 出现是为了解决 Array()行为不统一的问题。

    ```
    Array() // []
    Array(undefined) // [undefined]
    Array(3) // [, , ,] -- 行为不统一
    Array(3, 11, 8) // [3, 11, 8]    
    ```
3. Array.prototype.copyWithin(target, start = 0, end = this.length)

   - target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
   - start（可选）：从**该位置开始**读取数据，默认为 0。如果为负值，表示从末尾开始计算。
   - end（可选）：到**该位置前停止**读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

    **修改当前数组**,将指定位置的成员复制到其他位置
    > **Tips😊** <br>
    > &nbsp;有副作用的数组方法（即修改原数组）
    > - shift/unshift/push/pop
    > - sort
    > - splice
    > - copyWithin
4. Array.prototype.find() & Array.prototype.findIndex()

    用于找出第一个符合条件的数组成员,如果没有符合条件的成员，则返回undefined。

    返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

    这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。

    > **Tips😊** <br>
    > &nbsp;关于回调函数的this
    >- 定时器回调/ajax回调/数组遍历相关方法回调: window (箭头函数例外)
    >- dom事件监听回调: dom元素
5. Array.prototype.includes()

    返回一个布尔值，表示某个数组是否包含给定的值

    之前，检查是否包含某个值,用 indexOf

    - 不够语义化
    - NaN

      ```
      [NaN].indexOf(NaN)// -1

      [NaN].includes(NaN)// true    
      ```
    不兼容ie
    ```
    const contains = (() =>
      Array.prototype.includes
        ? (arr, value) => arr.includes(value)
        : (arr, value) => arr.some(el => el === value)
    )();
    contains(['foo', 'bar'], 'baz'); // => false
    ```    
6. Array.prototype.fill()    

    使用给定值，填充一个数组。
    ```
    ['a', 'b', 'c'].fill(7)
    // [7, 7, 7]

    new Array(3).fill(7)
    // [7, 7, 7]
    ```
7. 数组实例的 entries()，keys() 和 values()

    它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

    - for...of循环，作为遍历所有数据结构的统一的方法。

    - 一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。

8. Array.prototype.flat() & Array.prototype.flatMap()

   数组扁平化

    如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。

    flatMap 对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。

#### 总结
罗列了这么多api，再想想之前常用的api,数组的方法非常多。首先，肯定是因为数组是数据结构中经常使用的，才有了这么多需求，还不断迭代出新的api。我自己过了一遍es6的api，最大的感受就是，记不住用不上。那到底要怎么对待api呢？先有个印象，开发时产生需求，查找api，掌握后纳入自己的代码习惯，或者看别人的代码掌握一个api再考虑要不要纳入自己的代码习惯里，自己也要迭代的。

#### 我常用的api
- 操作原数组的利器：shift/unshift/push/pop/splice
- 摘取出想要的：slice
- 不在乎结果只求过程的遍历：forEach
- 映射成新数组：map
- 强大的累加器：reduce
- 判断是否包含：includes

## 数组的空位
跳过空位、跳过但保留位置、处理成undefined

由于空位的处理规则非常不统一，所以建议避免出现空位。
## sort
