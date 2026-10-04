// 这个文件只做两件小事：深色模式记忆 + 滚动时的淡入效果。
// 不需要的话，删掉 index.html 底部那一行 <script> 也能正常显示。

(function () {
  "use strict";

  /* ---------- 深色 / 浅色模式 ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var saved = null;

  try {
    saved = localStorage.getItem("theme");
  } catch (err) {
    saved = null; // 隐私模式下可能读不到，忽略即可
  }

  if (saved === "dark" || saved === "light") {
    root.setAttribute("data-theme", saved);
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      var next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (err) {
        /* 存不了就算了 */
      }
    });
  }

  /* ---------- 滚动淡入 ---------- */
  var targets = document.querySelectorAll(".hero > *, .section > *");

  if (!("IntersectionObserver" in window)) {
    return;
  }

  Array.prototype.forEach.call(targets, function (el) {
    el.classList.add("reveal");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );

  Array.prototype.forEach.call(targets, function (el) {
    observer.observe(el);
  });

  /* ---------- 页脚年份自动更新 ---------- */
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
