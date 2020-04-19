# vue-cli
- 脚手架工具，快速从零开始搭建项目，用配置好的模版迅速搭建项目，省去配置webpack文件
#### 与webpack的关系
- 内置了基础loader和插件，可使用`vue-cli-service inspect`审查项目的 webpack 配置
- 简单扩展用**configureWebpack**，该对象将会被 webpack-merge 合并入最终的 webpack 配置。
- 链式操作用**chainWebpack**，通过 webpack-chain 这个库维护的。
- 替换一个规则里的 Loader，要先清除

###### webpack新增配置
- resolve：路径别名
- 引入全局less文件,自动化导入文件 (用于颜色、变量、mixin……)

#### 常用配置
- devServer

  proxy本地开发环境，跨域配置

- productionSourceMap

  生产环境是否生成 sourceMap （一段维护了前后代码映射关系的json描述文件） 文件（**开启可以直接定位到编译前代码**）

