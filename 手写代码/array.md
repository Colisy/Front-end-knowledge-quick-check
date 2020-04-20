## 去重
- reduce + indexOf
  ```
  const filterNonUnique = arr => arr.reduce((pre,i)=> {
    pre.indexOf(i) === -1?pre.push(i):null
    return pre
  },[])
  ```
- `const unique = arr => [...new Set(arr)];`
## 扁平
- reduce + 递归
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

  如果没有提供初始值，则将使用数组中的第一个元素

  `array.reduce((p,c)=>Math.max(p,c))`
- Math.max ( ...array )  
 
