function deepCopy(obj) {
  //引用数据类型 (数组 对象 函数) 返回true
  function isObject(o){
    return (typeof o === 'object' || typeof o === 'function') && o !== null
  }
  /* if(!isObject(obj)){
    throw new Error('非对象')
  } */
  let newObj = Array.isArray(obj)?[]:{}
  Reflect.ownKeys(obj).forEach((key)=>{
    //引用数据类型 (数组 对象 函数) 都将进行深拷贝
    newObj[key] = isObject(obj[key])?deepCopy(obj[key]):obj[key]
  })
  return newObj
}
let obj = {
  a: [1, 2, 3],
  b: {
    c: 2,
    d: 3
  },
  f(){
    console.log(1)
  }
}
let newObj = deepCopy(obj)
newObj.b.c = 1
newObj.b.f = ()=>{console.log(2)}
console.log(obj.b.c) // 2
obj.f() // 1