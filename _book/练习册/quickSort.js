function quickSort(arr){
  if(arr.length <= 1){
    return arr
  }
  const mid = arr.length/2
  const midItem = arr.splice(mid,1)[0]
  const left = []
  const right = []
  arr.forEach(item => {
    if (item > midItem) {
      right.push(item)
    } else {
      left.push(item)
    }
  });
  return quickSort(left).concat(midItem,quickSort(right))
}
let t = [4,6,2,7,3,1]
console.log(quickSort(t)) 