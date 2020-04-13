//单位时间内执行一次
function jieliu (fn,time){
  let pre = 0
  return function (...arguments) {
    if(Date.now() - pre > time){
      pre = Date.now()
      fn.call(this,...arguments)
    }
  }
}
//延迟一定时间执行
function fangdou (fn,time) {
  let timer = null
  return function (...args) {
    clearInterval(timer)
    timer = setTimeout(()=>{
      fn.call(this,...args)
    },time)
  }
}