function jieliu(fn,time) {
  let pre = 0
  return function (...args) {
    if(Date.now() - pre > time){
      fn.apply(this,args)
    }
  }
}
function fangdou(fn,time) {
  let timer = null
  return function (...args) {
    clearInterval(timer)
    setInterval(() => {
      fn.apply(this,args)
    }, time);
  }
}