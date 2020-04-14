function deepclone(obj={}) {
  let newObj = Array.isArray(obj)?[]:{}
  for (let key in obj) {
    const val = obj[key]
    newObj[key] = typeof val === 'object'?deepclone(val):val
  }
  return newObj
}
let a = {
  name: 'a',
  like: {
    first: 'sing',
    then: 'dance'
  }
}
let b = deepclone(a)
b.like.first = 'wow'
console.log('a',a)
console.log('b',b)
