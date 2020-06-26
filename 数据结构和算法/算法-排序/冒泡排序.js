/* 每次循环选出一个最大的，冒泡到最后 */
function bubbleSort(arr) {
  const len = arr.length  
  // 外层循环 -- 交换多少轮,冒出多少泡
  for(let i=0;i<len;i++) {
    // 内层循环 -- 用于完成每一轮遍历过程中的重复比较+交换
      for(let j=0;j<len-1-i;j++) {
          if(arr[j] > arr[j+1]) {
              [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
          }
      }
  }
  return arr
}
//最好情况为 O(n)
function betterBubbleSort(arr) {
  const len = arr.length  
  
  for(let i=0;i<len;i++) {
      // 区别在这里，我们加了一个标志位
      let flag = false
      for(let j=0;j<len-1-i;j++) {
          if(arr[j] > arr[j+1]) {
              [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
              // 只要发生了一次交换，就修改标志位
              flag = true
          }
      }
      
      // 若一次交换也没发生，则说明数组有序，直接放过
      if(flag == false)  return arr;
  }
  return arr
}
/* 
最好时间复杂度: O(n);
最坏时间复杂度: O(n^2);
平均时间复杂度: O(n^2);
*/