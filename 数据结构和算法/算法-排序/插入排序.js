/* 插入排序的核心思想是“找到元素在它前面那个序列中的正确位置”。
具体来说，插入排序所有的操作都基于一个这样的前提：当前元素前面的序列是有序的。
基于这个前提，从后往前去寻找当前元素在前面那个序列里的正确位置。 */
function insertSort(arr) {
  // 缓存数组长度
  const len = arr.length
  // temp 用来保存当前需要插入的元素
  let temp  
  // i用于标识每次被插入的元素的索引
  for(let i = 1;i < len; i++) {
    // j用于帮助 temp 寻找自己应该有的定位
    let j = i
    temp = arr[i]  
    // 判断 j 前面一个元素是否比 temp 大
    while(j > 0 && arr[j-1] > temp) {
      // 如果是，则将 j 前面的一个元素后移一位，为 temp 让出位置
      arr[j] = arr[j-1]   
      j--
    }
    // 循环让位，最后得到的 j 就是 temp 的正确索引
    arr[j] = temp
  }
  return arr
}
/* 
最好时间复杂度: O(n);
最坏时间复杂度: O(n^2);
平均时间复杂度: O(n^2);
*/