//洗牌算法
function disorder(array) {
  const length = array.length;
  let current = length - 1;
  let random;
  while (current >-1) {
    random = Math.floor(length * Math.random());
    [array[current], array[random]] = [array[random], array[current]];
    current--;
  }
  return array;
}
let arr = [1,2,3,4,5,6,7,8]
disorder(arr)
console.log(arr)