# js基础
###### 事件流
事件捕获(从document往事件目标触发) --> 事件冒泡(相反)

事件冒泡的应用--事件委托
###### 传参
传参，是按值传递（拷贝副本），基本数据类型会拷贝一份，引用数据类型拷贝引用地址
###### arguments
类数组对象：拥有一个 length 属性和若干索引属性的对象
类数组转数组
```
var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }
// 1. slice 返回值
Array.prototype.slice.call(arrayLike); // ["name", "age", "sex"] 
// 2. splice
Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"] 
// 3. ES6 Array.from 返回值
Array.from(arrayLike); // ["name", "age", "sex"] 
// 4. apply 返回值
Array.prototype.concat.apply([], arrayLike)
```
使用ES6的 ... 运算符，轻松转成数组
```
function func(...arguments) {

    //进入执行上下文时，重写初始化创建的arguments
    
    console.log(arguments); // [1, 2, 3]
}

func(1, 2, 3);
```