---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: James Zow
  text: Personal blog website
  tagline: full-time entrepreneur, Java full stack development, Rust enthusiast
  #  image:
  #    src:
  #    alt:
  actions:
    - text: My articles
      link: /articles/
    - text: Navigation bar
      link: /nav/
      theme: alt
features:
  - icon: 📖
    title: Reading Book notes
    details: Organizing some notes from books I have read, </br>I think it's a pleasure to flip through them in my spare time.
    link:
    linkText: books notes
  - icon: 📘
    title: Source Code Reading
    details: The source code for some technical frameworks includes design patterns, principles, and some interesting implementation details.
    link:
    linkText: codes reading
  - icon: 💡
    title: Inspiration Records
    details: Some of the inspirations I have received in life. It's a good idea to record them.
    link:
    linkText: inspiration
  - icon: 🧰
    title: Development Tools
    details: I personally use some commonly used technology development tools. If you want to try them out, you can click to read and take a look.
    link:
    linkText: development tools
  - icon: 🐞
    title: Bug Records
    details: Although some of the bugs may seem unbelievable and foolish, it prevents me from making the same mistakes frequently
    link:
    linkText: bug records
  - icon: 💯
    title: The Road to Entrepreneurship
    details: Slow down big things and persist in achieving them.
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