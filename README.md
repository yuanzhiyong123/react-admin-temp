# 后台管理系统模板

基于 react react-router redux antd

## 本地开发
`
npm install 

npm run dev  //环境变量：process.env.REACT_APP_ENV=development
`
## 编译打包
`
npm run build:test  //测试环境打包  环境变量：process.env.REACT_APP_ENV=test

npm run build:online  //正式环境打包  环境变量：process.env.REACT_APP_ENV=production
`

## 增加路由和页面
1.在pages目录下增加页面组件，并在index.js中引入后 集体暴露出去
2.在route目录内配置对应的路由

## 打包及nginx部署时需要修改、注意的
因为采用的是BrowserRouter路由，如果部署到子路径下  如 www.baidu.com/test 需要：

1.路由添加basename

`
<BrowserRouter basename='/test'>
</BrowserRouter>
`

2.package.json文件 修改打包后静态文件路径

`
"homepage": "/test"
`

3.nginx 需要增加重定向，防止刷新404

`
try_files $uri $uri/ /test/index.html;
`
