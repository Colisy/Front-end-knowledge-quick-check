# css
- rem
  相对于根元素`<html>`的字体大小的单位
#### flex
- 容器属性
  flex-wrap flex-direction
  行内 justify-content align-items
  行间 align-content
- 项目属性
  order
  flex-shrink 默认等比缩小，可以进行缩小排序
  flex-grow 默认等分剩余空间，可以确定具体怎么分
  >两列布局

  flex-basis
  align-self
#### 布局
- 上中下
  1. position
```
<style type="text/css">
  .layout.absolute div{
    position: absolute;
    float: left;
  }
  .layout.absolute .top{
    top: 0;
    height: 100px;
    background: red;
  }
  .layout.absolute .bottom{
    bottom: 0;
    height: 100px;
    background: blue;
    float: left;
  }
  .layout.absolute .center{
    top: 100px;
    bottom: 100px;
    background: yellow;
    overflow: auto;
  }

</style>
<article class="layout absolute">
  <div class="top"></div>
  <div class="center">
    <h1>absolute中间自适应元素</h1>
  </div>
  <div class="bottom"></div>
</article> 
```
2. flex
```
<style type="text/css">
  .layout.flexbox{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction:column;
  }
  .layout.flexbox .top{
    height: 100px;						
    background: red;
  }
  .layout.flexbox .center{
    flex:1;
    background: yellow;
  }
  .layout.flexbox .bottom{
    height: 100px;
    background: blue;
  }
</style>
<article class="layout flexbox">
  <div class="top"></div>
  <div class="center">
    <h1>flexbox中间自适应元素</h1>
  </div>
  <div class="bottom"></div>
</article> 
```