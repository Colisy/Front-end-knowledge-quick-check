//函数式编程
//柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => currying(fn, ...args, ...args2);
  }
}
function simpleURL(protocol, domain, path) {
  return protocol + "://" + domain + "/" + path;
}
let conardliSite = currying(simpleURL)('http', 'www.conardli.top');
let page1 = conardliSite('page1.html');    
console.log(page1)