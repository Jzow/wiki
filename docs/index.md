---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: James Zow
  text: 创业者、SDE、Rust
  tagline: 我正在学习机械设计的基础知识，包括传感器检测和执行器、深度学习 (CV方向)、神经网络、嵌入式系统设计和微控制器接口。
  image:
    src: me.png
    alt: James Zow
  actions:
    - text: 我的文章
      link: /articles/binary
    - text: 工具栏
      link: /nav/
      theme: alt
features:
  - icon: 📖
    title: 读书笔记
    details: 整理一些我读过的书籍笔记，</br>闲暇时翻翻，觉得挺有乐趣。
    link: /books/r1
    linkText: 书籍笔记
  - icon: 📘
    title: 源码阅读
    details: 一些技术框架的源码，包括设计模式、原理，以及一些有趣的实现细节。
    link: /codes/
    linkText: 源码阅读
  - icon: 💡
    title: 灵感记录
    details: 生活中得到的一些灵感。
    link: /ideas/
    linkText: 灵感
  - icon: 🧰
    title: 开发工具
    details: 我个人使用的一些常用技术开发工具，如果您想尝试的话，可以点击查看一下。
    link: /tools/
    linkText: 开发工具
  - icon: 🐞
    title: Bug记录
    details: 虽然有些bug看起来难以置信，有些愚蠢，但是防止我频繁犯同样的错误。
    link: /bugs/
    linkText: bugs 记录
  - icon: 💯
    title: 创业之路
    details: 大事慢做，坚持到底。
    link: https://wansenai.com
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
