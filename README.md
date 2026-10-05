# 个人主页

一个不用安装任何工具就能用的静态个人主页。三个文件组成：

```
index.html          页面内容（你要改的主要文件）
assets/style.css    样式和配色
assets/main.js      深色模式、滚动动画
```

## 本地预览

直接双击 `index.html` 就能在浏览器里看到效果。

如果想更接近真实网站，可以在本目录执行：

```bash
python -m http.server 8000
```

然后打开 http://localhost:8000

## 内容在哪里

写文案时的几条原则（改内容时照着来，风格才不会跑偏）：

1. 不拿别人当垫脚石，不写「比起 X，我更喜欢 Y」这类对比句
2. 不用三件套排比（「数据、环境、结果」这种），有话直说
3. 少用形容词和价值观表态，多写具体在做什么
4. 第一人称，像跟人说话，不像自我评价
5. 介绍自己时用「正在学习」而不是「研究 / 做」——现阶段这样更准确，也更不容易被追问成果
6. 术语按需用：说「自动驾驶」就够了，不必堆「个性化端到端」这类限定词（描述具体论文时再用准确术语）
7. 能删就删：不写「日常就是……」这类填充句，也不写「邮件我基本都会回」这类客套承诺，留下信息本身

文字全部写在 `index.html` 里，用一个浏览器或编辑器打开就能改，改完刷新页面即可看到。

## 中英文两个版本

- `index.html` — 英文版，也是默认版，网址是 https://toyosatomimi98.github.io/
- `zh/index.html` — 中文版，网址是 https://toyosatomimi98.github.io/zh/

直接访问域名（或分享不带路径的链接）看到的是英文版。页面右上角的「中 / EN」
按钮就是在这两个文件之间跳转。它们是两个独立的 HTML，改内容时记得两边都改，
不会自动同步。样式、头像、水印都复用 `assets/` 里的同一套文件，
所以改配色或换图只需要动一次。

- 想加一个项目：复制一整段 `<li class="card"> … </li>`，改掉里面的标题、说明和链接
- 邮箱现在公开在页面上（`liruiqin@u.nus.edu`）。如果以后被爬虫骚扰，可以改成图片或 JavaScript 拼接的写法
- 想换头像：直接用新图片覆盖 `assets/avatar.jpg`（正方形效果最好），不用改代码
- 想换水印：用新图片覆盖 `assets/watermark.webp`；深浅改 `assets/style.css` 里的 `--watermark-opacity`（默认 0.07，数字越小越淡）
- 想换配色：打开 `assets/style.css`，最上面那几个变量（`--accent` 等）就是主题色

## 博客

- `blog/index.html` — 文章列表页，网址是 https://toyosatomimi98.github.io/blog/
- `blog/post-template.html` — 文章模板，平时不用动它

写一篇新文章：

1. 复制 `blog/post-template.html`，改名成 `blog/2026-10-05-my-first-post.html`
   （日期 + 简短英文标题，中间用连字符，这个名字就是将来的网址）
2. 打开新文件，按里面 ①②③ 三处注释改标题、日期和正文
3. 打开 `blog/index.html`，把里面注释掉的列表段取消注释，照格式加一条「标题 + 日期」

文章写中文还是英文都行，两种可以混在同一个列表里。首页顶部导航的「Blog / 博客」
指的就是这个列表页。

## 发布到 GitHub Pages

仓库名必须是 `toyosatomimi98.github.io`，推送完成后 GitHub 会自动开启 Pages，无需任何额外设置。

1. 在 GitHub 新建仓库，名字填 `toyosatomimi98.github.io`，选 Public，不要勾选 Add a README
2. 在本目录执行：

```bash
git remote add origin https://github.com/toyosatomimi98/toyosatomimi98.github.io.git
git push -u origin main
```

3. 等 1—2 分钟，访问 https://toyosatomimi98.github.io

以后更新内容只要三步：

```bash
git add -A
git commit -m "更新内容"
git push
```
