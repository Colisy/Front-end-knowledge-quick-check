//节流用throttle包装函数
//下拉加载
function throttle (fn,interval){
  let last = 0
  return function(){
    const context = this
    const args = arguments
    const now = +new Date()
    if(now - last > interval){
      last = now
      fn.apply(context,args)
    }
  }
}
//防抖用debounce包装函数
//联想搜索
function debounce (fn,delay){
  let timer = null
  return function(){
    const context = this
    const args = arguments
    if(timer){
      clearTimeout(timer)
    }
   timer = setTimeout(fn.apply(context,args),delay)
  }
}