
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### vue-router 设计进阶

#### 情景分析

> 整个应用分为首页和内容页和登录页，首页对应三个入口对应内容页的三个模块，三个模块为嵌套在内容页layout组件内的三个子路由，但路由地址仍然表现为一级导航，其中我的项目和工作台两个模块需要进行登录，在没有登录的请况下从首页跳转至我的项目会首先导向登录页面，经验简单的验证，用localstorage模拟ajax进行存储用户名和登录状态，之后跳转回我的项目页，工作台同理，实现面包屑导航，路由地址错误重定向，用户名面板、登录面板及退出面板相互耦合绑定、所有导航转场和谐过渡，我的文档模块利用hash值精确定位文档内容，引入第三方动画库，在组件级钩子函数路由更新时，组件新创建时均实现切换过渡、退出后定向到首页

![首页](https://i.loli.net/2017/12/06/5a276c4491897.png)
![内容页（文档）](https://i.loli.net/2017/12/06/5a276c44cbc7f.png)
![登录之后项目页](https://i.loli.net/2017/12/06/5a276c44bd186.png)

