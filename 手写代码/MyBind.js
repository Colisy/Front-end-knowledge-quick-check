Function.prototype.MyBind = function(targetThis){
  const fn = this
  const args = [...arguments].slice(1)//slice返回一个新数组
  return function F(){
    if(this instanceof F){
      return new fn(...args,...arguments)
    }
    return fn.apply(targetThis,args.concat(...arguments))
  }
}
Array.prototype.splice()//返回删除数组，原数组改变
function bind(fn, context){
  return function(){
    return fn.apply(context, arguments);
  };
}