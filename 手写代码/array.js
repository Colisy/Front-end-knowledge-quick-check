let arr = [1,2,3,4,5]
//myForeach
Array.prototype.myForeach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index],index)
  }
}
arr.myForeach((item,index)=>{
  arr[index] = item*2
})
console.log('foreach',arr)
//myMap
Array.prototype.myMap = function (callback) {
  let newArr = []
  for (let index = 0; index < this.length; index++) {
    let item = callback(this[index],index)
    newArr.push(item)
  }
  return newArr
}
const mapArr = arr.myMap((item,index)=> {
  return item*3
})
console.log('map',mapArr)
//myReduce
Array.prototype.myReduce = function (callback,initValue) {
  let pre  = initValue?initValue:this[0]
  for (let index = initValue?0:1; index < this.length; index++) {
    pre = callback(pre,this[index],index)
  }
  return pre
}
const reduce = arr.myReduce((pre,item,index)=>{
  return pre + item
},3)
console.log(reduce)
//reduce实现map
Array.prototype.rToMap = function (fn){
  return this.reduce((pre,item,index)=>{
    pre.push(fn.call(this,item,index))
    return pre
  },[])
}
let test = [1,2,3]
console.log(test.rToMap((item,index)=>item += 1))
//reduce实现filter
Array.prototype.rToFilter = function(fn){
  return this.reduce((pre,item,index)=>{
    if(fn.call(this,item,index)){
      pre.push(item)
    }
    return pre
  },[])
}
test = [1,4,7]
console.log(test.rToFilter((item)=>item<5))