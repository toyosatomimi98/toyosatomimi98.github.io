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

## 你要改的地方

在 `index.html` 里搜索“你的名字”“your@email.com”“yourname”，全部替换成你自己的信息即可。
文件里有 `<!-- ========== 需要你修改的地方 ========== -->` 这样的注释标记，照着改不会漏。

## 发布到 GitHub Pages

见下方步骤，或直接把本仓库推送上去后在仓库 Settings → Pages 里选择 `main` 分支根目录。

1. 在 GitHub 新建仓库，名字必须是 `<你的用户名>.github.io`
2. 把本目录的内容 push 到该仓库的 `main` 分支
3. 等 1 分钟左右，访问 `https://<你的用户名>.github.io`
