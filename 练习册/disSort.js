function disSort (arr){
  let toIndex
  for (let index = 0; index < arr.length; index++) {
    toIndex = Math.floor(Math.random()*arr.length)
    const mid = arr[index]
    arr[index] = arr[toIndex]
    arr[toIndex] = mid
  }
}
let arr = [1,2,3,4,5,6,7,8]
disSort(arr)
console.log(arr)