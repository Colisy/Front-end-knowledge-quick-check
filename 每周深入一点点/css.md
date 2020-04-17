# css
#### html语义化
>语义化是指根据内容，选择合适的标签，便于**开发者阅读**和写出更优雅的代码的同时，让**浏览器的爬虫**和机器很好的解析,利于**SEO**。
#### html5
###### 根元素
Element | Description 
----|------
html | 所有元素必须是这个元素的子节点  
###### 文档元数据
Element | Description 
----|------
meta | `<meta name="参数" content="具体描述信息">`<br>`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

###### 脚本
Element | Description 
----|------
template(h5)|通过 js 在运行时实例化内容的容器。
###### 章节
Element | Description 
----|------
section|文档中的一个章节
nav|导航
header|常包含 logo、页面标题、章节标题和导航
footer|常包含版权信息、法律信息链接和反馈建议用的地址
main|主要内容
figure|图例
figcaption|图例说明
###### 嵌入内容
Element | Description 
----|------
video|视频
audio|音频
canvas|图表
svg|矢量图

#### 盒子模型
- ie怪异盒子：宽度 = 内容宽度width（content+border+padding）+ margin
- 标准盒子：宽度 = 内容的宽度width（content）+ border + padding + margin
- box-sizing属性控制元素的盒子模型，默认标准盒子，border-box怪异盒子
#### 隐藏
- display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）
- visibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）
#### BFC
- 浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为"visiable"的块级盒子，都会为他们的内容创建新的BFC（Block Fromatting Context， 即块级格式上下文）。
- BFC渲染规则
  1. BFC是一个独立的容器，外面的元素不会影响里面的元素
  2. 计算BFC高度的时候浮动元素也会参与计算
- 应用
  1. 防止浮动导致父元素高度塌陷
  2. 避免外边距折叠
#### 伪元素和伪类
- 单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
- 伪类：nth-child(n)/hover
- 伪元素：before/selection
- [css参考](https://www.itcodemonkey.com/article/2853.html)
#### rem
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
  1. float + position
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
#### 省略号
- overflow: hidden；（文字长度超出限定宽度，则隐藏超出的内容）
- white-space: nowrap；（设置文字在一行显示，不能换行）
- text-overflow: ellipsis；（规定当文本溢出时，显示省略符号来代表被修剪的文本）

#### less
- 嵌套
- 变量：主题色
- 混合mixins：类名自调
- 映射：对象读值，颜色集

#### 选择器优先级
内联样式 > ID 选择器 > 类选择器 = (属性选择器) = 伪类选择器 > 标签选择器 = 伪元素选择器

#### 清除浮动
- clearfix
  ```
  .clearfix:after{
        content: '';
        display: block;
        clear: both;//移到所有浮动元素下面
      }
  ```
- 父级div定义`overflow：auto;`开启BFC