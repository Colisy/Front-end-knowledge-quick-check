## form
#### input
###### 初版实现
1. css3,label浮动效果
   ```
    transform-origin: top left;
    transform: translate(0, 16px) scale(1);
    transition: all 0.1s ease-in-out; //speed

    transform: translate(0, 4px) scale(0.75);
   ```
2. 组件通信
   >v-model语法糖
   `<input :value="msg” @input="msg=$event.target.value" />`

   子组件
   ```
   currentVal: {
     //有设置就要有get
      get() {
        return this.value;
      },
      //设置的时候更改父组件数据
      set(val) {
        this.$emit("input", val);
      }
    }
   ```
   >输入框输入真实数据流是，子传父,父传给子
3. 校验
   >将正则传过来
###### 反思
>饿了吗的element ui,蚂蚁金服的ant design,都用了async-validator 对数据进行异步校验的库
#### select
###### 需求
>下拉数据可以满足有无图片
###### 方案
作用域插槽
```
//数据传给子组件后，v-for给每一个li,分别取出每项数据通过插槽的标签属性传给父组件

<template v-slot:default="slotProps">
  <div class="coutryIcon" :style="{backgroundImage: 'url(' + slotProps.option.img + ')'}"></div>
</template>

<slot :option='option'></slot>
```
>插槽 具名插槽(插槽有多个) 作用域插槽(可使用子组件的数据)
#### 总结
###### 遇到的难题
- 数据清空
  >表单提交后重置，v-if，先用定时器控制表单恢复，但会出现短暂白屏，应该是因为在执行下一个宏任务之前进行了渲染，所以选择放入微任务中，promise.resolve().then()
###### 可以优化的地方
- 研究element UI,将表单变成一个整体的form组件
- 发布npm
