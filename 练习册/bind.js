Function.prototype.myCall = function (context = window,...args) {
  const fn = Symbol()
  context[fn] = this
  let r = context[fn](...args)
  delete context[fn]
  return r
}
Function.prototype.myBind = function(context,...args){
  const fn = this
  return function (...args2) {
    return fn.apply(context,args2.concat(args))
  }
}