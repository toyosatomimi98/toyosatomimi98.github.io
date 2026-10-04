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

文字全部写在 `index.html` 里，用一个浏览器或编辑器打开就能改，改完刷新页面即可看到。

- 想加一个项目：复制一整段 `<li class="card"> … </li>`，改掉里面的标题、说明和链接
- 邮箱现在公开在页面上（`liruiqin@u.nus.edu`）。如果以后被爬虫骚扰，可以改成图片或 JavaScript 拼接的写法
- 想换头像：直接用新图片覆盖 `assets/avatar.jpg`（正方形效果最好），不用改代码
- 想换配色：打开 `assets/style.css`，最上面那几个变量（`--accent` 等）就是主题色

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
