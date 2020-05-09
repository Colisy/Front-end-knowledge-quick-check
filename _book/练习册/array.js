Array.prototype.myForeach = function(cb){
  const arr = this
  for (let index = 0; index < arr.length; index++) {
    cb(arr[index],index)
  }
}
Array.prototype.myMap = function (cb) {
  const arr = this
  const newArr = []
  for (let index = 0; index < arr.length; index++) {
    let r = cb(arr[index],index)
    newArr.push(r)
  }
  return newArr
}
Array.prototype.myReduce = function (cb,pre){
  const arr = this
  for (let index = 0; index < arr.length; index++) {
    pre = cb(pre,arr[index],index)
  }
  return pre
}
let arr = [1,2,3,3]
/* arr.myForeach(item =>{
  console.log('foreach',item)
}) */
/* let arr2 = arr.myMap(item=>{
  return ++item
})
console.log(arr2) */
/* let r = arr.myReduce((pre,item)=>{
  return pre + item
},5)
console.log(r) */
Array.prototype.r2Map = function (cb) {
  const arr = this
  const newArr = arr.reduce((pre,item,index)=>{
    const r = cb(item,index)
    pre.push(r)
    return pre
  },[])
  return newArr
}
/* let r = arr.r2Map(item=>{
  return ++item
})
console.log(r) */
Array.prototype.r2Filter = function (cb) {
  const arr = this
  const newArr = []
  arr.reduce((pre,item,index)=>{
    cb(item,index)?pre.push(item):null
    return pre
  },newArr)
  return newArr
}
/* let r = arr.r2Filter((item,index)=>{
  return arr.indexOf(item) === arr.lastIndexOf(item)
})
console.log(r) */
const filterNonUnique = arr => arr.reduce((pre,i)=> {
  pre.indexOf(i) === -1?pre.push(i):null
  return pre
},[])
console.log(filterNonUnique(arr))