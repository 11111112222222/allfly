

10.14

> 1. 安装sass-loader和node-sass有问题。
     初步解决：1.export SASS_BINARY_SITE="https://npm.taobao.org/mirrors/node-sass"
              2.npm install --save  sass-loader node-sass不成功，无权限
     最终解决：关机重装成功，是windows系统shell问题。


10.29

> 1. 子路由跳转有问题
     解决：子路由path不加/
> 2. 高度不适页面会移动
     解决：忘记设置box-sizing:border-box了
     (git log --graph分支查看)


