## 去重
- indexOf + lastIndexOf + filter
  ```
  const filterNonUnique = arr => arr.filter(i => 
    arr.indexOf(i) === arr.lastIndexOf(i)
  )
  ```
- `const unique = arr => [...new Set(arr)];`
## 扁平
- reduce
  ```
  function flatten(array) {
    return array.reduce(
      (target, current) =>
        Array.isArray(current) ?
          target.concat(flatten(current)) :
          target.concat(current)
      , [])
  }  
  ```
- flat ( Infinity )
## 最值
- reduce
  `array.reduce((c,n)=>Math.max(c,n))`
- Math.max ( ...array )  
 
