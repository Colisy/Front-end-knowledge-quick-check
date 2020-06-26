/* 
原地排序 -- 空间复杂度O(1) */
// 快速排序入口
function quickSort(arr, left = 0, right = arr.length - 1) {
  // 定义递归边界，若子数组只有一个元素，则没有排序必要
  if(arr.length > 1) {
      // 计算当前数组的基准值
      const nextPivot = partition(arr, left, right)  
      // 如果左边子数组的长度不小于1，则递归快排这个子数组
      if(left < nextPivot-1) {
          quickSort(arr, left, nextPivot-1)
      }
      // 如果右边子数组的长度不小于1，则递归快排这个子数组
      if(nextPivot<right) {
          quickSort(arr, nextPivot, right)
      }
  }
  return arr
}   
// 寻找基准值的过程
function partition(arr, left, right) {
  // 基准值默认取中间位置的元素
  let pivotValue = arr[Math.floor(left + (right-left)/2)]
  // 初始化左右指针
  let i = left 
  let j = right  
  // 当左右指针不越界时，循环执行以下逻辑
  while(i<=j) {
      // 左指针所指元素若不大于基准值，则右移左指针
      while(arr[i] < pivotValue) {
          i++
      }
      // 右指针所指元素若不小于基准值，则左移右指针
      while(arr[j]>pivotValue) {
          j--
      }

      // 若i<=j，则意味着基准值左边存在较大元素或右边存在较小元素，交换两个元素确保左右两侧有序
      if(i<=j) {
          swap(arr, i, j)  
          i++  
          j--
      }
      
  }
  // 返回左指针索引作为下一个基准值的索引
  return i
}

// 快速排序中使用 swap 的地方比较多，我们提取成一个独立的函数
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
/* 
最好时间复杂度： 它对应的是这种情况——我们每次选择基准值，都刚好是当前子数组的中间数。
              这时，可以确保每一次分割都能将数组分为两半，进而只需要递归 log(n) 次。
              这时，快速排序的时间复杂度分析思路和归并排序相似，最后结果也是 O(nlog(n))。
最坏时间复杂度：每次划分取到的都是当前数组中的最大值/最小值。
              大家可以尝试把这种情况代入快排的思路中，你会发现此时快排已经退化为了冒泡排序，对应的时间复杂度是 O(n^2)。
平均时间复杂度： O(nlog(n)) */