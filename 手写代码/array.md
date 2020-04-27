## 去重
- 双层循环(兼容性好)
  ```
  var array = [1, 1, '1', '1'];

  function unique(array) {
      // res用来存储结果
      var res = [];
      for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
          for (var j = 0, resLen = res.length; j < resLen; j++ ) {
              if (array[i] === res[j]) {
                  break;
              }
          }
          // 如果array[i]是唯一的，那么执行完循环，j等于resLen
          if (j === resLen) {
              res.push(array[i])
          }
      }
      return res;
  }

  console.log(unique(array)); // [1, "1"]
  ```
- reduce + indexOf
  ```
  const filterNonUnique = arr => arr.reduce((pre,i)=> {
    pre.indexOf(i) === -1?pre.push(i):null
    return pre
  },[])
  ```
- map + filter
  ```
  function unique (arr) {
      const seen = new Map()
      return arr.filter(a => !seen.has(a) && seen.set(a, 1))
  }
  ```
- set
  ```
  const unique = arr => [...new Set(arr)];  
  ```
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
- replace + JSON.parse (正则)
  ```
  let str = JSON.stringify(arr)
  str = str.replace(/(\[|\])/g, '');
  str = '[' + str + ']';
  arr = JSON.parse(str);
  ```
## 最值
- reduce

  如果没有提供初始值，则将使用数组中的第一个元素

  `array.reduce((p,c)=>Math.max(p,c))`
- Math.max ( ...array )  
 
