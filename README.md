<h2 align="center">南开大学亿灵官方网站HomePage</h2>

<!-- TOC -->

- [前言](#%E5%89%8D%E8%A8%80)
- [Quick Start](#quick-start)
    - [Linux/Mac](#linuxmac)
    - [Windows](#windows)
        - [windows下yarn的使用](#windows%E4%B8%8Byarn%E7%9A%84%E4%BD%BF%E7%94%A8)
- [整体规划](#%E6%95%B4%E4%BD%93%E8%A7%84%E5%88%92)
- [工作规划](#%E5%B7%A5%E4%BD%9C%E8%A7%84%E5%88%92)

<!-- /TOC -->

## 前言

此版本为使用honeycomb重构的版本，新的官网代码依赖于[honeycomb体系](https://github.com/node-honeycomb/honeycomb-server)构建,使得每一个模块都独立开来，减少每一个模块的代码量，使得新的开发者进入的时候，不用阅读过多的代码，或者接触之前的代码，从而达到快速入门，提升项目整体代码质量的效果。

为什么要使用honeycomb来构建，引入[剪老板](https://github.com/fishbar)的话来说就是：

>>>
    我们不能控制写出来屎的代码，但是我们能控制屎的大小。
>>>

## Quick Start

### Linux/Mac
 
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
- 打包
    ```
    honeycomb pack
    ```
### Windows

- 环境依赖
  - nodejs
  - honeycomb-cli
  - git-bash
  - [yarn](https://yarnpkg.com/zh-Hans/)
  - 可参考[链接](https://yuque.com/honeycomb/honeycomb/dev-win)
- 注意：
    - 安装好yarn建议先使用
    ```
    $ yarn cache clean
    ```

#### windows下yarn的使用
为了加速打包，我们不使用原生的npm，而使用第三方提供yarn

step1: yarn设置淘宝镜像

```bash
    $ yarn config set registry https://registry.npm.taobao.org
```

step2: 打包

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


                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         






