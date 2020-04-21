# vue-cli
- 脚手架工具，快速从零开始搭建项目，用配置好的模版迅速搭建项目，省去配置webpack文件

#### public

public/index.html 文件是一个会被 html-webpack-plugin 处理的模板。在构建过程中，资源链接会被自动注入。
```
//vue-cli内置插件
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
    hash: true,
    inject: true,
    favicon: './public/favicon.ico'
  })
```

任何放置在 public 文件夹的**静态资源**都会被简单的复制，而不经过 webpack。你需要通过**绝对路径**来引用它们。当你通过绝对路径引用它时，留意应用将会**部署**到哪里。这是部署在域名的根部的写法。

```
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```

#### 静态资源

- 当你在 JavaScript、CSS 或 *.vue 文件中使用相对路径 (必须以 . 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。
```
例如，url(./image.png) 会被翻译为 require('./image.png')，
```

- public 文件夹的静态资源
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


