Promise.myAll = function (...promises) {
  let num = promises.length
  let arr = []
  return new Promise ((res,rej)=>{
    promises.forEach((promise,index)=>{
      promise.then(val=>{
        arr[index](val)
        if(index === num - 1){
          res(arr)
        }
      }).catch(err=>{
        rej(err)
      })
    })
  })
}
Promise.myRace = function (...promises){
  return new Promise ((res,rej) =>{
    promises.forEach(promise=>{
      promise.then(val=>{
        res(val)
      }).catch(err=>{
        rej(err)
      })
    })
  })
}