//主要是利用两个或多个不同位置的指针，通过速度和方向的变换解决问题。注意这种技巧经常在排序数组中使用。

/* 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分 */
function reOrderArray(array) {
  if (Array.isArray(array)) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
      while (array[start] % 2 === 1) {
        start++;
      }
      while (array[end] % 2 === 0) {
        end--;
      }
      if (start < end) {
        [array[start], array[end]] = [array[end], array[start]]
      }
    }
  }
  return array;
}
/* 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。 */
function FindNumbersWithSum(array, sum) {
  if (array && array.length > 0) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      const s = array[left] + array[right];
      if (s > sum) {
        right--;
      } else if (s < sum) {
        left++;
      } else {
        return [array[left], array[right]]
      }
    }
  }
  return [];
}