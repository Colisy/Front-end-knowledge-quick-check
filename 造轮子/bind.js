//call
Function.prototype.myCall = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined; // 用于防止 Function.prototype.myCall() 直接调用
  }
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}
//apply
Function.prototype.myApply = function (context = window, args) {
  if (this === Function.prototype) {
    return undefined; // 用于防止 Function.prototype.myCall() 直接调用
  }
  const fn = Symbol();
  context[fn] = this;
  let result;
  if (Array.isArray(args)) {
    result = context[fn](...args);
  } else {
    result = context[fn]();
  }
  delete context[fn];
  return result;
}
//bind
Function.prototype.myBind = function (context,...args1) {
  /* if (this === Function.prototype) {
    throw new TypeError('Error')
  } */
  const fn = this
  return function F(...args2) {
    // 判断是否用于构造函数
    /* if (this instanceof F) {
      return new fn(...args1, ...args2)
    } */
    return fn.apply(context, args1.concat(args2))
    //return fn.call(context, ...args1,...args2)
  }
}
let obj = {
  name: 'obj'
}
function a (age){
  console.log(`我是${this.name},今年${age}`)
}
a.myCall(obj,11)
a.myApply(obj,[11])
a.myBind(obj,[11])()
a.myBind(obj)(11)



/*  // 获取argument对象 类数组对象 不能调用数组方法
 function test1() {
  console.log('获取argument对象 类数组对象 不能调用数组方法', arguments);
}

// 获取参数数组  可以调用数组方法
function test2(...args) {
  console.log('获取参数数组  可以调用数组方法', args);
}

// 获取除第一个参数的剩余参数数组
function test3(first, ...args) {
  console.log('获取参数数组  可以调用数组方法', args);
}

// 透传参数
function test4(first, ...args) {
  fn(...args);
  fn(...arguments);
}

function fn() {
  console.log('透传', ...arguments);
}

test1(1, 2, 3);
test2(1, 2, 3);
test3(1, 2, 3);
test4(1, 2, 3); */