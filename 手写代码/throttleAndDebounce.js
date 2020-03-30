//节流用throttle包装函数
//只在单位时间内执行一次,第一次执行
//下拉加载
function throttle(event, time) {
  let pre = 0;
  return function (...args) {
    if (Date.now() - pre > time) {
      pre = Date.now();
      event.apply(this, args);
    }
  }
}
//防抖用debounce包装函数
//事件触发n秒后才执行
//联想搜索 窗口大小变化 表单验证
function debounce(event, time) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      event.apply(this, args);
    }, time);
  };
}