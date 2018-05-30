<h2 align="center">南开大学亿灵官方网站HomePage</h2>


## 前言

此版本为使用honeycomb重构的版本，新的官网代码依赖于[honeycomb体系](https://github.com/node-honeycomb/honeycomb-server)构建,使得每一个模块都独立开来，减少每一个模块的代码量，使得新的开发者进入的时候，不用阅读过多的代码，或者接触之前的代码，从而达到快速入门，提升项目整体代码质量的效果。

为什么要使用honeycomb来构建，引入[剪老板](https://github.com/fishbar)的话来说就是：

>>>
    我们不能控制写出来屎的代码，但是我们能控制屎的大小。
>>>

## Quick Start

 - 环境依赖
    - nodejs
    - honeycomb-cli
     ```
     $ npm install honeycomb-cli -g
     ```

 - 安装项目依赖包
```bash
$ npm install
``` 
 - 启动
```bash
$ honeycomb start
``` 

## windows下打包
为了加速打包，我们不使用原生的npm，而使用第三方提供[yarn](https://yarnpkg.com/zh-Hans/)

step1: yarn设置淘宝镜像

```bash
    $ yarn config set registry https://registry.npm.taobao.org
```

step2: 替换makefile里面的 npm -> yarn

step3: 打包

```
$ honeycomb pack
```



## 整体规划

使用honeycomb体系进行开发，进行多模块多阶段的开发，下面是对整个社团网站的模块规划。

```
                                     
                           社团网站                                                                          
                              |                                                                          
                              |                                                                          
            |----------------------------------------------|                                             
            |                                              |                                             
            |                                              |                                             
         静态界面                                          非静态界面                                             
            |                                              |                                             
            |                                              |                                             
  |---------|---------|                    |-----------------------------|                               
  |         |         |                    |                             |                               
  |         |         |                    |                             |                               
 首页      项目展示      社团介绍            活动界面                      常用界面                               
                                           -                             -                               
                                |----------+-----------|       |---------+---------|                     
                                |                      |       |                   |                     
                               报名                    团建     文章                管理                     
                                                                                
```

从项目的名字[static],你就可以知道，这个项目主要负责首页，项目展示等静态界面的内容。


## 工作规划

- [x] 第一期静态界面
- [x] 常用界面-文章
- [x] 常用界面-用户登录注册


                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         






