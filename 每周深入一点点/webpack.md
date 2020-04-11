# webpack
#### 是什么
webpack是一个**模块打包工具**。对于不同类型的依赖，webpack有对应的模块加载器，而且会分析模块间的依赖关系，最后合并生成优化的静态资源。
#### webpack的基本功能
- 代码转换
- 文件优化
- 代码分割
- 模块合并
- 热更新
- 代码校验
#### loader
>webpack自身只能理解js文件，但是项目中肯定会有其他的文件，webpack需要依靠各类loader去**处理非js文件**，将他们转换成webpack能够有效进行处理的模块，然后webpack会对他们进行打包处理然后输出。
- img
  url-loader：在文件很小的情况下以 base64 的方式把文件内容注入到代码中去；
  html-loader：处理标签里的图片；
  image-loader：加载并且压缩图片文件；
- css
  less-loader
  css-loader
  vue-style-loader / style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS;  
  postcss-loader：添加浏览器前缀；
- js
  babel-loader：把 ES6 转换成 ES5;
  eslint-loader：通过 ESLint 检查 JavaScript 代码;
- vue
  >vue文件是一个SFC类文件。

  vue-loader
  vue-template-compiler：处理模版字符串，注入到从 script 导出的组件中；
  vue-style-loader：用于处理vue-loader解析后的style；
  >还需要插件VueLoaderPlugin
#### plugins
- html-webpack-plugin：生成一个html文件，自动引入bundle.js
- clean-webpack-plugin：删除原来的dist文件
- Webpack.HotModuleReplacementPlugin：热更新
- webpack-bundle-analyzer：分析打包后文件
- HappyPack：开启多进程loader转换
- VueLoaderPlugin：vue-loader的使用都是需要伴生 VueLoaderPlugin
#### loader，plugins区别
- 作用
  Loader的作用是让webpack拥有了加载和**解析非Js文件**的能力。
 Plugin可以**扩展webpack的功能**，让webpack具有更多的灵活性。在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。插件相对于loader来说，可以执行更广的任务，从打包到压缩，到分割文件。
- 用法
  Loader在module.rules中配置，也就是说他作为**模块的解析规则**而存在。类型为数组，每一项都是一个Object，里面描述了对于什么类型的文件（test），使用什么加载(loader)和使用的参数（options）。
  Plugin在plugins中单独配置。 类型为数组，每一项是一个**plugin的实例**，参数都通过构造函数传入。
#### 构建过程
>webpack是**基于入口**的。webpack会自动地**递归解析**入口所需要加载的所有资源文件，然后用**不同的Loader来处理不同的文件，用Plugin来扩展webpack功能**。  
#### 构建性能优化
- 配置mode参数
  >如果没有设置，webpack4 会将 mode 的默认值设置为 production,production模式下会进行tree shaking(去除无用代码)和uglifyjs(代码压缩混淆)
- 缩小文件的搜索范围
  1. resolve 
     alias：`'@': path.resolve(__dirname, './src')`
     extensions：定义的后缀查找文件
  2. loader
     exclude：`exclude: /node_modules/`
  3. noParse：类似jquery这类依赖库，一般会认为不会引用其他的包，noParse属性,告诉webpack不必解析
- HappyPack开启多进程Loader转换
- 抽离第三方模块
  webpack.DllPlugin
#### 前端性能优化
- image-loader：加载并且压缩图片文件；
- production模式下会进行tree shaking(去除无用代码)和uglifyjs(代码压缩混淆)
- 路由按需加载
  webpack提供的require.ensure()
  es提案的import()
- 代码分割
#### 代码分割
```
optimization:{
  splitChunks: {
    // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
    chunks: "async",
    // 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。
    minSize: 30000,
    // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
    minChunks: 1,
    // 表示按需加载文件时，并行请求的最大数目。默认为5。
    maxAsyncRequests: 5,
    // 表示加载入口文件时，并行请求的最大数目。默认为3。
    maxInitialRequests: 3,
    // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
    automaticNameDelimiter: '~',
    // 设置chunk的文件名。默认为true。当为true时，splitChunks基于chunk和cacheGroups的key自动命名。
    name: true,
    // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。
    //模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。默认将所有来自 node_modules目录的模块打包至vendors组，将两个以上的chunk所共享的模块打包至default组。
    cacheGroups: {
      vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
      },
      // 
      default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
      }
    }
  }
}
```
#### 配置多页应用
[🔗链接](https://www.imooc.com/article/23643)
#### 手写loader
[🔗链接](https://juejin.im/post/5e532b116fb9a07ce152c31a#heading-13)
#### 手写plugin
插件暴露的是构造函数（class）,可以监听webpack打包的过程
[🔗链接](https://juejin.im/post/5e532b116fb9a07ce152c31a#heading-21)





