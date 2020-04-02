// TODO
function use(obj) {
  obj.name = 'bbb'
  obj = new Object()
  obj.name = 'aaa'
 }
 let person = new Object();
 use(person);
 log(person.name)
 //------------------
 bbb
 
 //----------------
 function Foo() {
     var i = 0;
     return function () {
         console.log(i++);
     }
 }
 var f1 = Foo(), f2 = Foo();
 f1();
 f1();
 f2();
 //-----------------
 0 1 2
 //---------------
  for(let i=0; i<10, i++){
    settimeout(_=> {
     console.log（i）
     }, 0)
  }
 //----------
 01234...
 //----------------
 10个10
 //-------------
 let length = 10;
 function fn(){
  log(this.length)
 }
 var obj = {
   length: 5,
     method: function(fns){
         fns();
         arguments[0]();
     }
 }
 obj.method(fn, 1)
 //----------------
 10 5
 // -------------
 function Foo() {
   console.log(this)
 }
 var arr = []
 arr.f = Foo
 document.onclick = Foo
 
 arr.f()
 document.onclick()
 //----------------
 [] window
 //----------------
 var str = 'sfsfa'  //'s|fs|fa'
 //---------
 function (str){
   let strArr = str.splice('')
     let isO = strArr.length%2 === 0
     let targetStr 
     if(isO){
        for(let i = 0;i<=strArr.length;i+2){
            targetStr += strArr[i].join(strArr[i+1])
            if(i !== strArr.length){
                targetStr += '|'
               }
          
     }else {
       for(let i = 0;i<=strArr.length;i+2){
             if(i === 0){
                targetStr += strArr[0] + '|'
                }else{
                 targetStr += strArr[i].join(strArr[i+1])
                    if(i !== strArr.length){
                        targetStr += '|'
                    }
                }
           
     }
    return targetStr
 }
 
   