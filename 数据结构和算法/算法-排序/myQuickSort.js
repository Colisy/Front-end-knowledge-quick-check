function quickSort(arr){
  if (arr.length<=1) {
    return arr
  }
  let midIndex = arr.length/2
  let mid = arr.splice(midIndex,1)[0]
  let left = []
  let right = []
  arr.forEach(item => {
    if (item > mid) {
      right.push(item)
    } else {
      left.push(item)
    }
  });
  return quickSort(left).concat(mid,quickSort(right))
}
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(quickSort(arr));  //输出：[ 3, 10, 15, 25, 25, 41, 42, 54, 72, 98, 121 ]