function deepCopy(obj) {
  let newObj = Array.isArray(obj)?[]:{}
  
  Object.keys(obj).forEach((key)=>{
    //引用数据类型 (数组 对象) 都将进行深拷贝
    newObj[key] = typeof obj[key] === 'object'?deepCopy(obj[key]):obj[key]
  })
  return newObj
}
let obj = {
  a: [1, 2, 3],
  b: {
    c: 2,
    d: 3
  },
  f:function a (){
    console.log(44)
  }
}
let newObj = deepCopy(obj)
newObj.b.c = 1
newObj.f = ()=>{console.log(2)}
console.log(obj.b.c) // 2
console.log(newObj.b.c) // 1
obj.f() // 44
newObj.f() // 2
console.log(obj.f === newObj.f) //false